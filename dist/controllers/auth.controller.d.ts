import AuthService from '../services/auth.service';
import { NextFunction, Request, Response } from 'express';
declare class AuthController {
    authService: AuthService;
    signUp: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    logIn: (req: Request, res: Response, next: NextFunction) => Promise<void>;
}
export default AuthController;
