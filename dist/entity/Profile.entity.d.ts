/**
 * @Profile
 * @description
 * @author Chidozie C. Okafor
 * one-to-one relationship between User and Profile
 * @param {type} type
 * @param {type} type
 */
import { Transaction } from '@entity/Account.entity';
import { BaseEntity } from '@entity/Base.entity';
import { Address } from '@entity/Shared.entity';
import { User } from '@entity/User.entity';
export declare enum AccountType {
    Landlord = "landlord",
    Tenant = "tenant",
    Manager = "manager"
}
export declare class Profile extends BaseEntity {
    bio: string;
    transactions: Transaction[];
    address: Address[];
    dateOfBirth: Date;
    accountType: AccountType;
    user: User;
}
