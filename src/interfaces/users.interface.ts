// import { TransactionDocument } from '@interfaces/account.interface';
import { AddressDocument } from '@interfaces/shared.interface';

export interface IProfile {
  bio: string;
  // transactions: TransactionDocument[];
  address: AddressDocument[];
  dateOfBirth: Date;
  accountType: string;
  user: IUser;
}
export interface IUser {
  id: string;
  email: string;
  phoneNumber: string;
  isActive: boolean;
  firstName: string;
  lastName: string;
  password: string;
  // profile: IProfile;
}
