/**
 * @author Chidozie C. Okafor
 * @description This is authentication repository for user authentication
 * @param {type} type
 */
import { UdremsData } from '@/dataSource';
import { HttpException } from '@/exceptions/HttpException';
import { TokenData } from '@/interfaces/auth.interface';
import { CreateUserDto } from '@dtos/users.dto';
import { User } from '@entity/User.entity';
import { IAuthRepository } from '@interfaces/Authrepo.interface';
import { IUser } from '@interfaces/users.interface';
import { Repository } from 'typeorm';

class AuthService implements IAuthRepository {
  public async signup(createUserDto: CreateUserDto): Promise<IUser> {
    const userRepository: Repository<User> = UdremsData.getRepository(User);
    const userExist = await userRepository.findOne({ where: { email: createUserDto.email } });
    if (userExist) throw new HttpException(409, 'user already exist');

    const userExist2 = await userRepository.findOne({ where: { userName: createUserDto.userName } });
    if (userExist2) throw new HttpException(409, 'username already exist');

    const userExist3 = await userRepository.findOne({ where: { phoneNumber: createUserDto.phoneNumber } });
    if (userExist3) throw new HttpException(409, 'Phone number already exist');

    const user = await userRepository.create(createUserDto);
    const savedUser = await userRepository.save(user);
    return savedUser;
  }

  public async login(loginUserDto: any): Promise<{ user: IUser; token: string; expiresIn: Number }> {
    const userRepository: Repository<User> = UdremsData.getRepository(User);
    const user = await userRepository.findOne({
      where: { email: loginUserDto.email },
    });
    if (!user) throw new HttpException(401, 'Invalid email or password');

    const passwordMatch = await user.comparePassword(loginUserDto.password);
    if (!passwordMatch) throw new HttpException(401, 'Invalid email or password');

    const { expiresIn, token } = await this.createToken(user);
    return {
      user,
      token,
      expiresIn,
    };
  }

  public async createToken(user: IUser): Promise<TokenData> {
    const expiresIn: number = 60 * 60;

    return {
      expiresIn,
      token: await user.generateToken(),
    };
  }

  public createCookie(tokenData: TokenData): string {
    return `Authorization=${tokenData.token}; HttpOnly; Max-Age=${tokenData.expiresIn};`;
  }
}

export default AuthService;
