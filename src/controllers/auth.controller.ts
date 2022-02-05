import { CreateUserDto } from '@dtos/users.dto';
import { IUser } from '@interfaces/users.interface';
import AuthRepository from '@repositories/Auth.repo';
import { NextFunction, Request, Response } from 'express';

class AuthController {
  public authService = new AuthRepository();

  public signUp = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const userData: CreateUserDto = req.body;
      const signUpUserData: IUser = await this.authService.signup(userData);

      res.status(201).json({ data: signUpUserData, message: 'signup' });
    } catch (error) {
      next(error);
    }
  };

  public logIn = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const userData: CreateUserDto = req.body;
      const { token, user } = await this.authService.login(userData);
      // const { cookie, findUser } = await this.authService.login(userData);

      // res.setHeader('Set-Cookie', [cookie]);
      res.setHeader('Set-Cookie', [token]);
      res.status(200).json({ data: user, message: 'login' });
    } catch (error) {
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

export default AuthController;
