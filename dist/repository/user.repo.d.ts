import { User } from '../entity/User';
export declare class UserRepository {
    private userRepository;
    constructor();
    findAll(): Promise<User[]>;
    findOne(id: number): Promise<User>;
    save(user: User): Promise<User>;
    remove(user: User): Promise<void>;
}
