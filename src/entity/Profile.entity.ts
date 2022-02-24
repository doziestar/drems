/**
 * @Profile
 * @description
 * @author Chidozie C. Okafor
 * one-to-one relationship between User and Profile
 * @param {type} type
 * @param {type} type
 */

// import { Transaction } from '@entity/Account.entity';
import { BaseEntity } from '@entity/Base.entity';
import { Address } from '@entity/Shared.entity';
import { IProfile } from '@interfaces/users.interface';
import { IsDate, IsString } from 'class-validator';
import { Column, Entity, JoinColumn, ManyToMany, OneToMany, OneToOne } from 'typeorm';
import { Property } from './Property.entity';
import { User } from './User.entity';

export enum AccountType {
  Landlord = 'landlord',
  Tenant = 'tenant',
  Manager = 'manager',
}

@Entity()
export class Profile extends BaseEntity implements IProfile {
  @Column({ nullable: true })
  @IsString()
  bio: string;

  @OneToMany(type => Address, address => address.profile, { nullable: true })
  @JoinColumn({ name: 'address', referencedColumnName: 'id' })
  address: Address[];

  @Column({ nullable: true })
  @IsDate()
  dateOfBirth: Date;

  @Column({ type: 'enum', enum: AccountType, default: AccountType.Tenant })
  accountType: AccountType;

  @OneToOne(type => User)
  @JoinColumn({ name: 'user' })
  user: User;

  @Column({ nullable: true })
  @ManyToMany(type => Property, property => property.profiles)
  @JoinColumn({ name: 'property' })
  properties: Property[];
}
