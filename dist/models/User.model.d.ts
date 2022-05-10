import { IUser } from '../interfaces/users.interface';
import { Model } from 'sequelize';
export declare class User extends Model implements IUser {
    hashPassword(): Promise<void>;
    comparePassword(password: string): Promise<boolean>;
    generateToken(): Promise<string>;
    createProfile(): Promise<void>;
    id: string;
    email: string;
    phoneNumber: string;
    username: string;
    isActive: boolean;
    firstName: string;
    lastName: string;
    password: string;
    isVerified: boolean;
    role: string;
}
