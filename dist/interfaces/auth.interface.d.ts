import { IUser } from './users.interface';
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
