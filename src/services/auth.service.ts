import { CreateUserDto } from '@dtos/users.dto';
import { HttpException } from '@exceptions/HttpException';
import { DataStoredInToken, TokenData } from '@interfaces/auth.interface';
import { UserInput, UserResponse } from '@interfaces/users.interface';
import userModel from '@models/User.model';
import { isEmpty } from '@utils/util';
import config from 'config';
import jwt from 'jsonwebtoken';

class AuthService {
  public users = userModel;

  public async signup(userData: CreateUserDto): Promise<UserResponse> {
    if (isEmpty(userData)) throw new HttpException(400, "You're not userData");

    const findUser = this.users.findOne({ where: { email: userData.email } });
    if (findUser) throw new HttpException(409, `You're email ${userData.email} already exists`);

    const createUserData = this.users.create(userData);

    return createUserData;
  }

  // public async login(userData: CreateUserDto): Promise<{ cookie: string; findUser: UserResponse }> {
  //   if (isEmpty(userData)) throw new HttpException(400, "You're not userData");

  //   const findUser: UserResponse = this.users.findOne({ where: { email: userData.email } });
  //   if (!findUser) throw new HttpException(409, `You're email ${userData.email} not found`);

  //   const isPasswordMatching: boolean = await bcrypt.compare(userData.password, findUser.password);
  //   if (!isPasswordMatching) throw new HttpException(409, "You're password not matching");

  //   const tokenData = this.createToken(findUser);
  //   const cookie = this.createCookie(tokenData);

  //   return { cookie, findUser };
  // }

  public async logout(userData: UserInput): Promise<UserResponse> {
    if (isEmpty(userData)) throw new HttpException(400, "You're not userData");

    const findUser = this.users.findOne({ where: { email: userData.email } });
    if (!findUser) throw new HttpException(409, "You're not user");

    return findUser;
  }

  public createToken(user: UserInput): TokenData {
    const dataStoredInToken: DataStoredInToken = { id: user.id };
    const secretKey: string = config.get('secretKey');
    const expiresIn: number = 60 * 60;

    return { expiresIn, token: jwt.sign(dataStoredInToken, secretKey, { expiresIn }) };
  }

  public createCookie(tokenData: TokenData): string {
    return `Authorization=${tokenData.token}; HttpOnly; Max-Age=${tokenData.expiresIn};`;
  }
}

export default AuthService;
