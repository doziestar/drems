import { IUser, UserInput } from '../interfaces/users.interface';
import { Request } from 'express';

export interface DataStoredInToken {
  id: string;
}

export interface TokenData {
  token: string;
  expiresIn: number;
}

export interface RequestWithUser extends Request {
  user: IUser;
}

export interface IAuth {
  signup(user: UserInput): Promise<IUser>;
  login(user: UserInput): Promise<{ user: IUser; token: string; expiresIn: Number }>;
  createToken(user: IUser): Promise<TokenData>;
  createCookie(tokenData: TokenData): string;
}
