import { CreateUserDto } from '../dtos/users.dto';
import { TokenData } from '../interfaces/auth.interface';
import { UserInput, UserResponse } from '../interfaces/users.interface';
import userModel from '../models/User.model';
declare class AuthService {
    users: typeof userModel;
    signup(userData: CreateUserDto): Promise<UserResponse>;
    logout(userData: UserInput): Promise<UserResponse>;
    createToken(user: UserInput): TokenData;
    createCookie(tokenData: TokenData): string;
}
export default AuthService;
