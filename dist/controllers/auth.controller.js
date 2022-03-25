"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const auth_service_1 = (0, tslib_1.__importDefault)(require("../services/auth.service"));
class AuthController {
    constructor() {
        this.authService = new auth_service_1.default();
        this.signUp = async (req, res, next) => {
            try {
                const userData = req.body;
                // console.log(userData);
                // if (userData.password !== userData.confirmPassword) {
                //   throw new Error('Password does not match');
                // }
                const signUpUserData = await this.authService.signup(userData);
                res.status(201).json({ data: signUpUserData, message: 'signup' });
            }
            catch (error) {
                next(error);
            }
        };
        this.logIn = async (req, res, next) => {
            try {
                const userData = req.body;
                const { token, user, expiresIn } = await this.authService.login(userData);
                // const { cookie, findUser } = await this.authService.login(userData);
                // res.setHeader('Set-Cookie', [cookie]);
                res.setHeader('Set-Cookie', [token]);
                res.status(200).json({ data: user, message: 'login', token: token, expiresIn: expiresIn });
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
exports.default = AuthController;
