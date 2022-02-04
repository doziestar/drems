import { IsCurrency } from 'class-validator';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { BaseEntity } from '../entity/base.entity';
import { User } from './User';

// enum for transaction type (income, expense)
export enum TransactionType {
  Income = 'income',
  Expense = 'expense',
}

// enum for transaction status (pending, approved, rejected)
export enum TransactionStatus {
  Pending = 'pending',
  Approved = 'approved',
  Rejected = 'rejected',
}

// enum for transaction category (repair, rent, utility, etc)
export enum TransactionCategory {
  Repair = 'repair',
  Rent = 'rent',
  Utility = 'utility',
  Food = 'food',
  Travel = 'travel',
  Other = 'other',
}

export enum TransactionPaymentMethod {
  Cash = 'cash',
  Check = 'check',
  CreditCard = 'creditCard',
  DebitCard = 'debitCard',
  Other = 'other',
}

// transaction entity
@Entity()
export class Transaction extends BaseEntity {
  @Column({ type: 'enum', enum: TransactionType, default: TransactionType.Expense })
  type: TransactionType;

  @Column({ type: 'enum', enum: TransactionStatus, default: TransactionStatus.Pending })
  status: TransactionStatus;

  @Column({ type: 'enum', enum: TransactionCategory, default: TransactionCategory.Other })
  category: TransactionCategory;

  @Column({ type: 'enum', enum: TransactionPaymentMethod, default: TransactionPaymentMethod.Cash })
  paymentMethod: TransactionPaymentMethod;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  @IsCurrency({ locale: 'en-US' })
  amount: number;

  @Column({ nullable: true })
  description: string;

  @Column({ nullable: true })
  receipt: string;

  @Column({ nullable: true })
  notes: string;

  @Column({ nullable: true })
  date: Date;

  @ManyToOne(type => User, user => user.transactions)
  @JoinColumn({ name: 'user_id' })
  user: User;
}
