/**
 * @user entity
 * @description
 * @author Chidozie C. Okafor
 *
 */
import { BaseEntity } from '@entity/Base.entity';
import { Profile } from '@entity/Profile.entity';
export declare class User extends BaseEntity {
    email: string;
    phoneNumber: string;
    isActive: boolean;
    firstName: string;
    lastName: string;
    password: string;
    profile: Profile;
    hashPassword(): Promise<void>;
    createProfile(): Promise<void>;
    generateToken(): Promise<string>;
    comparePassword(password: string): Promise<boolean>;
    get fullName(): string;
    get profileId(): Profile;
}
