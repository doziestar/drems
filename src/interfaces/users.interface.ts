import { TransactionDocument } from '@interfaces/account.interface';
import { AddressDocument } from '@interfaces/shared.interface';

export interface IUser {
  id: string;
  email: string;
  phoneNumber: string;
  isActive: boolean;
  firstName: string;
  lastName: string;
  password: string;
  profile: string;
}

export interface IProfile {
  bio: string;
  transactions: TransactionDocument[];
  address: AddressDocument[];
  dateOfBirth: string;
  accountType: string;
  user: IUser;
}
