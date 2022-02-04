import { BaseEntity } from '../entity/base.entity';
import { User } from './User';
export declare enum TransactionType {
    Income = "income",
    Expense = "expense"
}
export declare enum TransactionStatus {
    Pending = "pending",
    Approved = "approved",
    Rejected = "rejected"
}
export declare enum TransactionCategory {
    Repair = "repair",
    Rent = "rent",
    Utility = "utility",
    Food = "food",
    Travel = "travel",
    Other = "other"
}
export declare enum TransactionPaymentMethod {
    Cash = "cash",
    Check = "check",
    CreditCard = "creditCard",
    DebitCard = "debitCard",
    Other = "other"
}
export declare class Transaction extends BaseEntity {
    type: TransactionType;
    status: TransactionStatus;
    category: TransactionCategory;
    paymentMethod: TransactionPaymentMethod;
    amount: number;
    description: string;
    receipt: string;
    notes: string;
    date: Date;
    user: User;
}
