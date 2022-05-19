import { IUser } from '@interfaces/users.interface';

export interface IUserService {
  getUsers(): Promise<IUser[]>;
  getUser(id: string): Promise<IUser>;
  // createUser(user: IUser): Promise<{ newUser: IUser; password: string }>;
}
