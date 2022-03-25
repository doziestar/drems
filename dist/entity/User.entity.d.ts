/**
 * @user entity
 * @description
 * @author Chidozie C. Okafor
 *
 */
import { BaseEntity } from './Base.entity';
import { Profile } from './Profile.entity';
import { IUser } from '../interfaces/users.interface';
export declare class User extends BaseEntity implements IUser {
    email: string;
    userName: string;
    phoneNumber: string;
    isActive: boolean;
    firstName: string;
    lastName: string;
    password: string;
    role: string;
    isVerified: boolean;
    profile: Profile;
    hashPassword(): Promise<void>;
    createProfile(): Promise<void>;
    generateToken(): Promise<string>;
    comparePassword(password: string): Promise<boolean>;
    get fullName(): string;
    validatePassword(password: string): Promise<boolean>;
}
