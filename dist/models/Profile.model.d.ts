import { IProfile, IUser } from '../interfaces/users.interface';
import { Model } from 'sequelize';
export declare class Profile extends Model implements IProfile {
    user: IUser;
    userId: string;
    bio: string;
    website: string;
    location: string;
    birthday: string;
    avatar: string;
}
