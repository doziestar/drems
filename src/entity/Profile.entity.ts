/**
 * @Profile
 * @description
 * @author Chidozie C. Okafor
 * one-to-one relationship between User and Profile
 * @param {type} type
 * @param {type} type
 */

import { BaseEntity } from '@entity/Base.entity';
import { User } from '@entity/User.entity';
import { IsString } from 'class-validator';
import { Column, Entity, JoinColumn, OneToOne } from 'typeorm';

export enum AccountType {
  Landlord = 'landlord',
  Tenant = 'tenant',
  Manager = 'manager',
}

@Entity()
export class Profile extends BaseEntity {
  @Column({ unique: true })
  @IsString()
  email: string;

  @Column()
  @IsString()
  phoneNumber: string;

  @Column()
  @IsString()
  password: string;

  @Column({ type: 'enum', enum: AccountType, default: AccountType.Tenant })
  accountType: AccountType;

  @OneToOne(type => User, user => user.profile)
  @JoinColumn({ name: 'userId' })
  user: User;
}
