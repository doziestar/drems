import { CreateUserDto, LoginUserDto } from '../dtos/users.dto';
import { IAuth, TokenData } from '../interfaces/auth.interface';
import { IUser } from '../interfaces/users.interface';
declare class AuthService implements IAuth {
    private users;
    signup(createUserDto: CreateUserDto): Promise<{
        user: IUser;
        token: string;
        expiresIn: Number;
    }>;
    login(loginUserDto: LoginUserDto): Promise<{
        user: IUser;
        token: string;
        expiresIn: Number;
    }>;
    createToken(user: IUser): Promise<TokenData>;
    createCookie(tokenData: TokenData): string;
}
export default AuthService;
