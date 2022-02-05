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
import { IsDate, IsString } from 'class-validator';
import { Column, Entity, JoinColumn, OneToMany, OneToOne } from 'typeorm';

export enum AccountType {
  Landlord = 'landlord',
  Tenant = 'tenant',
  Manager = 'manager',
}

@Entity()
export class Profile extends BaseEntity {
  @Column()
  @IsString()
  bio: string;

  @OneToMany(type => Transaction, transaction => transaction.profile)
  @JoinColumn({ name: 'transaction' })
  transactions: Transaction[];

  @OneToMany(type => Address, address => address.profile)
  @JoinColumn({ name: 'address' })
  address: Address[];

  @Column()
  @IsDate()
  dateOfBirth: Date;

  @Column({ type: 'enum', enum: AccountType, default: AccountType.Tenant })
  accountType: AccountType;

  @OneToOne(type => User, user => user.profile)
  @JoinColumn({ name: 'user' })
  user: User;
}
