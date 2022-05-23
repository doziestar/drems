import { IUser } from '@/interfaces/users.interface';
import { User } from '@/models/User.model';
import { isEmpty } from '@/utils/util';
import { NextFunction, Request, Response } from 'express';
import { Op } from 'sequelize';

class UsersController {
  public async getUsers(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const users: IUser[] = await User.findAll();
      if (users.length === 0) {
        throw new Error('You have no users');
      }
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
      if (isEmpty(req.params.id || req.params.email)) throw new Error('User id or email is required');
      const id: string = req.params.id;
      const email: string = req.params.email;

      // if email is provided, get user by email instead of id
      const user: IUser = await User.findOne({
        where: {
          [Op.or]: [{ id }, { email }],
        },
      });

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

  public async getUserByEmail(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      if (isEmpty(req.params.email)) throw new Error('User email is required');
      const email: string = req.params.email;

      // if email is provided, get user by email instead of id
      const user: IUser = await User.findOne({
        where: {
          email,
        },
      });

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
