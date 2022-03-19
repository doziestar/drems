import { RequestWithUser } from '../interfaces/auth.interface';
import { NextFunction, Response } from 'express';
declare const authMiddleware: (req: RequestWithUser, res: Response, next: NextFunction) => Promise<void>;
export default authMiddleware;
