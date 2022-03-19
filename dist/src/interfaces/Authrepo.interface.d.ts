import { CreateUserDto, LoginUserDto } from '../../dtos/users.dto';
import { IUser } from '../../interfaces/users.interface';
export interface IAuthRepository {
    signup(createUserDto: CreateUserDto): Promise<IUser>;
    login(loginUserDto: LoginUserDto): Promise<{
        user: IUser;
        token: string;
    }>;
}
