/**
 * @author Chidozie C. Okafor
 * @description This is authentication repository for user authentication
 * @param {type} type
 */
import { CreateUserDto, LoginUserDto } from '../dtos/users.dto';
import { HttpException } from '../exceptions/HttpException';
import { IAuth, TokenData } from '../interfaces/auth.interface';
import { IUser } from '../interfaces/users.interface';
import { User } from '../models/User.model';

class AuthService implements IAuth {
  private users = User;
  public async signup(createUserDto: CreateUserDto): Promise<IUser> {
    const userExist: IUser = await this.users.findOne({
      where: { email: createUserDto.email },
    });
    if (userExist) throw new HttpException(409, 'user already exist');

    const userExist2: IUser = await this.users.findOne({ where: { username: createUserDto.username } });
    if (userExist2) throw new HttpException(409, 'username already exist');

    const userExist3: IUser = await this.users.findOne({ where: { phoneNumber: createUserDto.phoneNumber } });
    if (userExist3) throw new HttpException(409, 'Phone number already exist');

    const user: IUser = await this.users.create<User>({
      email: createUserDto.email,
      phoneNumber: createUserDto.phoneNumber,
      username: createUserDto.username,
      password: createUserDto.password,
    });
    return user;
  }

  public async login(loginUserDto: LoginUserDto): Promise<{ user: IUser; token: string; expiresIn: Number }> {
    const user = await this.users.findOne({
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
