import userService from '../services/users.service';
import { NextFunction, Request, Response } from 'express';
declare class UsersController {
    userService: userService;
    checkPhone: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    checkEmail: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    checkUserName: (req: Request, res: Response, next: NextFunction) => Promise<void>;
}
export default UsersController;
