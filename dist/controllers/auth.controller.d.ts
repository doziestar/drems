import AuthRepository from '@repositories/Auth.repo';
import { NextFunction, Request, Response } from 'express';
declare class AuthController {
    authService: AuthRepository;
    signUp: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    logIn: (req: Request, res: Response, next: NextFunction) => Promise<void>;
}
export default AuthController;
