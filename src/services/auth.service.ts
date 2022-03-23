/**
 * @author Chidozie C. Okafor
 * @description This is authentication repository for user authentication
 * @param {type} type
 */
import { CreateUserDto } from '@dtos/users.dto';
import { User } from '@entity/User.entity';
import { IAuthRepository } from '@interfaces/Authrepo.interface';
import { IUser } from '@interfaces/users.interface';
import { Repository } from 'typeorm';
import { UdremsData } from '../dataSource';

class AuthService implements IAuthRepository {
  public async signup(createUserDto: CreateUserDto): Promise<IUser> {
    const userRepository: Repository<User> = UdremsData.getRepository(User);
    const userExist = await userRepository.findOne({ where: { email: createUserDto.email } });
    console.log(userExist);
    if (userExist) {
      throw new Error('User already exist');
    }
    const user = await userRepository.create(createUserDto);
    const savedUser = await userRepository.save(user);
    return savedUser;
  }

  public async login(loginUserDto: any): Promise<{ user: IUser; token: string }> {
    const userRepository: Repository<User> = UdremsData.getRepository(User);
    const user = await userRepository.findOne({
      where: { email: loginUserDto.email },
    });
    if (user) {
      const passwordMatch = await user.comparePassword(loginUserDto.password);
      if (passwordMatch) {
        const token = await user.generateToken();
        return {
          user,
          token,
        };
      }
    }
    throw new Error('Invalid credentials');
  }
}

export default AuthService;
