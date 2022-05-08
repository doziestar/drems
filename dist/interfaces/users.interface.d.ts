import { Optional } from 'sequelize';
export interface UserAttributes {
    email: string;
    firstName: string;
    lastName: string;
    id: string;
    avatar: string;
    phoneNumber: string;
    createdAt: Date;
    updatedAt: Date;
    password: string;
}
export interface IUserResponse {
    user: UserAttributes;
}
export interface IUserProfile {
    id: StringConstructor;
    bio: string;
    address: string;
    createdAt: Date;
    updatedAt: Date;
}
export interface UserInput extends Optional<UserAttributes, 'id' | 'createdAt' | 'updatedAt' | 'avatar' | 'phoneNumber'> {
    email: string;
}
export interface UserResponse extends Required<UserAttributes> {
    id: string;
}
