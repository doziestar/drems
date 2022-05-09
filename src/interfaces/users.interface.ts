// import { TransactionDocument } from '@interfaces/account.interface';

export interface IUser {
  id: string;
  email?: string;
  phoneNumber?: string;
  isActive?: boolean;
  firstName?: string;
  lastName?: string;
  password: string;
  isVerified?: boolean;
  role: string;

  // create profile for user on signup
  createProfile(): Promise<void>;

  // hash password before inserting into database
  hashPassword(): Promise<void>;

  // compare password
  comparePassword(password: string): Promise<boolean>;

  // generate token
  generateToken(): Promise<string>;
}

export interface UserInput {
  email?: string;
  username?: string;
  phoneNumber?: string;
  password: string;
}
