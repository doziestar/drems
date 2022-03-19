/**
 * Transaction entity
 */
import { TransactionType } from '../enum/account.enum';
import { BaseEntity } from './Base.entity';
import { Profile } from './Profile.entity';
export declare class Transaction extends BaseEntity {
    description: string;
    amount: string;
    type: string;
    status: TransactionType;
    date: string;
    account: string;
    profile: Profile;
}
