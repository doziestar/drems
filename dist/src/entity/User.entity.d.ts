/**
 * @user entity
 * @description
 * @author Chidozie C. Okafor
 *
 */
import { BaseEntity } from '../../entity/Base.entity';
import { IUser } from '../../interfaces/users.interface';
export declare class User extends BaseEntity implements IUser {
    email: string;
    userName: string;
    phoneNumber: string;
    isActive: boolean;
    firstName: string;
    lastName: string;
    password: string;
    hashPassword(): Promise<void>;
    createProfile(): Promise<void>;
    generateToken(): Promise<string>;
    comparePassword(password: string): Promise<boolean>;
    get fullName(): string;
}
