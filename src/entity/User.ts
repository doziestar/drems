import * as bcrypt from 'bcrypt';
import { IsEmail, IsPhoneNumber, IsString } from 'class-validator';
import * as jwt from 'jsonwebtoken';
import { Column, Entity, OneToMany, OneToOne } from 'typeorm';
import { UserProfile } from '../entity/profile.entity';
import { BaseEntity } from './base.entity';
import { Transaction } from './Transactions.entity';

// enum for account type (landlord, tenant, manager)
export enum AccountType {
  Landlord = 'landlord',
  Tenant = 'tenant',
  Manager = 'manager',
}

@Entity()
export class User extends BaseEntity {
  @Column()
  @IsString()
  name: string;

  @Column()
  @IsEmail()
  email: string;

  @Column({ nullable: true })
  @IsString()
  firstName: string;

  @Column({ nullable: true })
  @IsString()
  lastName: string;

  @Column({ nullable: true })
  avatar: string;

  @Column({ type: 'enum', enum: AccountType, default: AccountType.Tenant })
  type: AccountType;

  @Column({ nullable: true })
  @IsPhoneNumber()
  phoneNumber: string;

  @OneToOne(type => UserProfile, userProfile => userProfile.user, { cascade: true })
  profile: UserProfile;

  // link user to transaction
  @OneToMany(type => Transaction, transaction => transaction.user, { cascade: true })
  transactions: Transaction[];

  @Column()
  @IsString()
  password: string;

  // hash password before saving using bcrypt
  // salt: string;
  public async hashPassword() {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
  }

  // compare password with hash
  public async comparePassword(password: string): Promise<boolean> {
    return await bcrypt.compare(password, this.password);
  }

  // generate token
  public generateToken(): string {
    const token = jwt.sign(
      {
        id: this.id,
        name: this.name,
        email: this.email,
        avatar: this.avatar,
        phoneNumber: this.phoneNumber,
      },
      process.env.JWT_SECRET,
    );
    return token;
  }

  // add profile to user after user is created
  public async addProfile() {
    this.profile = new UserProfile();
    this.profile.user = this;
  }
}
