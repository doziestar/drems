/**
 * @Profile
 * @description
 * @author Chidozie C. Okafor
 * one-to-one relationship between User and Profile
 * @param {type} type
 * @param {type} type
 */
import { BaseEntity } from '@entity/Base.entity';
import { Address } from '@entity/Shared.entity';
import { IProfile } from '@interfaces/users.interface';
import { User } from './User.entity';
export declare enum AccountType {
    Landlord = "landlord",
    Tenant = "tenant",
    Manager = "manager"
}
export declare class Profile extends BaseEntity implements IProfile {
    bio: string;
    address: Address[];
    dateOfBirth: Date;
    accountType: AccountType;
    user: User;
}
