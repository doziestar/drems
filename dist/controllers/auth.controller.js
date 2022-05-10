import _ from 'lodash';
import AuthService from '../services/auth.service';
class AuthController {
    constructor() {
        this.authService = new AuthService();
        this.signUp = async (req, res, next) => {
            try {
                const userData = req.body;
                // console.log(userData);
                if (userData.password !== userData.confirmPassword) {
                    throw new Error('Password does not match');
                }
                const { user, token, expiresIn } = await this.authService.signup(userData);
                const response = _.pick(user, [
                    'id',
                    'username',
                    'email',
                    'phoneNumber',
                    'firstname',
                    'lastname',
                    'fullname',
                    'createdAt',
                    'updatedAt',
                    'deletedAt',
                    'profile',
                    'isActive',
                    'isVerified',
                    'role',
                ]);
                res.status(201).json({ data: response, token: token, expiresIn: expiresIn, message: 'signup successful' });
            }
            catch (error) {
                next(error);
            }
        };
        this.logIn = async (req, res, next) => {
            try {
                const userData = req.body;
                const { token, user, expiresIn } = await this.authService.login(userData);
                const response = _.pick(user, [
                    'id',
                    'username',
                    'email',
                    'phoneNumber',
                    'firstname',
                    'lastname',
                    'fullname',
                    'createdAt',
                    'updatedAt',
                    'deletedAt',
                    'profile',
                    'isActive',
                    'isVerified',
                    'role',
                ]);
                res.setHeader('X-Auth', [token]);
                res.status(200).json({ data: response, message: 'login', token: token, expiresIn: expiresIn });
            }
            catch (error) {
                next(error);
            }
        };
        // public logOut = async (req: RequestWithUser, res: Response, next: NextFunction): Promise<void> => {
        //   try {
        //     const userData: User = req.user;
        //     const logOutUserData: User = await this.authService.logout(userData);
        //     res.setHeader('Set-Cookie', ['Authorization=; Max-age=0']);
        //     res.status(200).json({ data: logOutUserData, message: 'logout' });
        //   } catch (error) {
        //     next(error);
        //   }
        // };
    }
}
export default AuthController;
