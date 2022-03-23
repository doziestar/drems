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
import { Property } from '@entity/Property.entity';
import { Address } from '@entity/Shared.entity';
import { User } from '@entity/User.entity';
import { IProfile } from '@interfaces/users.interface';
import { IsDate, IsString } from 'class-validator';
import { Column, Entity, ManyToMany, OneToMany, OneToOne } from 'typeorm';

export enum AccountType {
  Landlord = 'landlord',
  Tenant = 'tenant',
  Manager = 'manager',
}

@Entity()
export class Profile extends BaseEntity implements IProfile {
  // properties: IProperty[];
  @Column({ nullable: true })
  @IsString()
  bio: string;

  @OneToMany(() => Address, address => address.profile, { nullable: true })
  address: Address[];

  @Column({ nullable: true })
  @IsDate()
  dateOfBirth: Date;

  @Column({ type: 'enum', enum: AccountType, default: AccountType.Tenant })
  accountType: AccountType;

  @OneToOne(() => User, user => user.profile)
  user: User;

  @ManyToMany(() => Property, property => property.profile)
  properties: Property[];
}
