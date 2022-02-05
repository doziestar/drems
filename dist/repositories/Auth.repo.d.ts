/**
 * @author Chidozie C. Okafor
 * @description This is authentication repository for user authentication
 * @param {type} type
 */
import { CreateUserDto } from '@dtos/users.dto';
import { IAuthRepository } from '@interfaces/Authrepo.interface';
import { IUser } from '@interfaces/users.interface';
declare class AuthRepository implements IAuthRepository {
    signup(createUserDto: CreateUserDto): Promise<IUser>;
    login(loginUserDto: any): Promise<{
        user: IUser;
        token: string;
    }>;
}
export default AuthRepository;
