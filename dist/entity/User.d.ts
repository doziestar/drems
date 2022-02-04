import { UserProfile } from '../entity/profile.entity';
import { BaseEntity } from './base.entity';
import { Transaction } from './Transactions.entity';
export declare enum AccountType {
    Landlord = "landlord",
    Tenant = "tenant",
    Manager = "manager"
}
export declare class User extends BaseEntity {
    name: string;
    email: string;
    firstName: string;
    lastName: string;
    avatar: string;
    type: AccountType;
    phoneNumber: string;
    profile: UserProfile;
    transactions: Transaction[];
    password: string;
    hashPassword(): Promise<void>;
    comparePassword(password: string): Promise<boolean>;
    generateToken(): string;
    addProfile(): Promise<void>;
}
