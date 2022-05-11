import AuthController from '@/controllers/auth.controller';
import { CreateUserDto } from '@/dtos/users.dto';
import { Routes } from '@/interfaces/routes.interface';
import validationMiddleware from '@/middlewares/validation.middleware';
import { createAccountLimiter } from '@/utils/limiters';
import { Router } from 'express';

class AuthRoute implements Routes {
  public path = '/auth/';
  public router = Router();
  public authController = new AuthController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.post(`${this.path}signup`, validationMiddleware(CreateUserDto, 'body', true), createAccountLimiter, this.authController.signUp);
    this.router.post(`${this.path}login`, validationMiddleware(CreateUserDto, 'body', true), this.authController.logIn);
    // this.router.post(`${this.path}logout`, authMiddleware, this.authController.logOut);
  }
}

export default AuthRoute;
