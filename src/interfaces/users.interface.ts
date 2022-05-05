// import { TransactionDocument } from '@interfaces/account.interface';
import { IProperty } from '@interfaces/property.interface';
import { AddressDocument } from '@interfaces/shared.interface';

export interface IProfile {
  bio: string;
  address: AddressDocument[];
  dateOfBirth: Date;
  accountType: string;
  user: IUser;
  properties: IProperty[];
}
export interface IUser {
  id: string;
  email?: string;
  phoneNumber?: string;
  isActive?: boolean;
  firstName?: string;
  lastName?: string;
  password: string;
  profile: IProfile;
  isVerified?: boolean;
  role: string;
  property: IProperty[];

  // create profile for user on signup
  createProfile(): Promise<void>;

  // hash password before inserting into database
  hashPassword(): Promise<void>;

  // compare password
  comparePassword(password: string): Promise<boolean>;

  // generate token
  generateToken(): Promise<string>;
}
