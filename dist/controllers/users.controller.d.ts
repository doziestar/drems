import userService from '@services/users.service';
import { NextFunction, Request, Response } from 'express';
declare class UsersController {
    userService: userService;
    getUsers: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    getUserById: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    createUser: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    updateUser: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    deleteUser: (req: Request, res: Response, next: NextFunction) => Promise<void>;
}
export default UsersController;
