import { Request } from 'express';
import { IUser, UserInput } from '../interfaces/users.interface';

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
  signup(user: UserInput): Promise<{ user: IUser; token: string; expiresIn: Number }>;
  login(user: UserInput): Promise<{ user: IUser; token: string; expiresIn: Number }>;
  createToken(user: IUser): Promise<TokenData>;
  createCookie(tokenData: TokenData): string;
}
