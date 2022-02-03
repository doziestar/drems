export interface IUserInput {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
}

export interface IUser extends IUserInput {
  id: number;
  avatar: string;
  phoneNumber: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface IUserResponse {
  user: IUser;
}

export interface IUserProfile {
  id: number;
  bio: string;
  address: string;
  // properties: Property[];
  createdAt: Date;
  updatedAt: Date;
}
