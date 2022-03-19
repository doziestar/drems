import { IProfile } from '../../interfaces/users.interface';
export interface TransactionDocument {
    description: string;
    amount: string;
    type: string;
    status: string;
    date: string;
    account: string;
    profile: IProfile;
}
