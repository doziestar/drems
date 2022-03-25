import { User } from '../entity/User.entity';
import { Repository } from 'typeorm';
declare class UserService {
    users: Repository<User>;
    checkUserExist(email: string): Promise<boolean>;
    checkUserNameExist(userName: string): Promise<boolean>;
    checkUserPhoneExist(phoneNumber: string): Promise<boolean>;
}
export default UserService;
