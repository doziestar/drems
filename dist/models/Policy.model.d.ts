import { IPolicy } from '../interfaces/policy.interface';
import { Model } from 'sequelize';
export declare class Policy extends Model implements IPolicy {
    id: string;
    amountToEnsure: number;
    email: string;
    inceptionDate: Date;
    installmentPayment: string;
    clientId: string;
}
