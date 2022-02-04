import { User } from '../entity/User';
import { BaseEntity } from './base.entity';
export declare class UserProfile extends BaseEntity {
    bio: string;
    user: User;
    address: string;
    avatar: string;
    phoneNumber: string;
}
