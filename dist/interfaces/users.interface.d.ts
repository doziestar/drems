import { IProperty } from './property.interface';
import { AddressDocument } from './shared.interface';
export interface IProfile {
    bio: string;
    address: AddressDocument[];
    dateOfBirth: Date;
    accountType: string;
    user: IUser;
    properties: IProperty[];
}
export interface IUser {
    id: string;
    email?: string;
    phoneNumber?: string;
    isActive?: boolean;
    firstName?: string;
    lastName?: string;
    password: string;
    profile: IProfile;
    isVerified?: boolean;
    role: string;
    createProfile(): Promise<void>;
    hashPassword(): Promise<void>;
    comparePassword(password: string): Promise<boolean>;
    generateToken(): Promise<string>;
}
