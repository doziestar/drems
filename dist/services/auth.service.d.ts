import { TokenData } from '../interfaces/auth.interface';
import { CreateUserDto } from '../dtos/users.dto';
import { IAuthRepository } from '../interfaces/Authrepo.interface';
import { IUser } from '../interfaces/users.interface';
declare class AuthService implements IAuthRepository {
    signup(createUserDto: CreateUserDto): Promise<IUser>;
    login(loginUserDto: any): Promise<{
        user: IUser;
        token: string;
        expiresIn: Number;
    }>;
    createToken(user: IUser): Promise<TokenData>;
    createCookie(tokenData: TokenData): string;
}
export default AuthService;
