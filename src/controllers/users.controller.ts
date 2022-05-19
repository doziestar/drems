import { IUser } from '@/interfaces/users.interface';
import { isEmpty } from '@/utils/util';
import { UserService } from '@services/users.service';
import { NextFunction, Request, Response } from 'express';

class UsersController {
  private userService: UserService;

  public async getUsers(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      console.log('getUsers');
      const users: IUser[] = await this.userService.getUsers();
      res.status(200).json({
        success: true,
        data: users,
      });
    } catch (error) {
      next(error);
    }
  }

  public async getUser(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      if (isEmpty(req.params.id)) throw new Error('User id is required');

      const user: IUser = await this.userService.getUser(req.params.id);

      if (!user) {
        throw new Error('User not found');
      }

      res.status(200).json({
        success: true,
        data: user,
      });
    } catch (error) {
      next(error);
    }
  }
}

export default UsersController;
