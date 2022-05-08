import { UserAttributes, UserInput } from '../interfaces/users.interface';
import { Model } from 'sequelize';
declare class User extends Model<UserInput, UserAttributes> {
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
export default User;
