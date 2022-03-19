/**
 * Transaction entity
 */
import { TransactionType } from '../../enum/account.enum';
import { BaseEntity } from '../../entity/Base.entity';
import { Profile } from '../../entity/Profile.entity';
export declare class Transaction extends BaseEntity {
    description: string;
    amount: string;
    type: string;
    status: TransactionType;
    date: string;
    account: string;
    profile: Profile;
}
