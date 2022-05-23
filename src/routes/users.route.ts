import { GetUserDto } from '@/dtos/users.dto';
import { Routes } from '@/interfaces/routes.interface';
import validationMiddleware from '@/middlewares/validation.middleware';
import UsersController from '@controllers/users.controller';
import { Router } from 'express';

class UsersRoute implements Routes {
  public path = '/users';
  public router = Router();
  private usersController = new UsersController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, this.usersController.getUsers);
    this.router.get(`/users/:email/:id`, validationMiddleware(GetUserDto, 'params', true), this.usersController.getUser);
    this.router.get(`/users/:email`, validationMiddleware(GetUserDto, 'params', true), this.usersController.getUserByEmail);
    // this.router.get(`${this.path}/check/username`, this.usersController.checkUserName);
    // this.router.post(`${this.path}`, validationMiddleware(CreateUserDto, 'body'), this.usersController.createUser);
    // this.router.put(`${this.path}/:id(\\d+)`, validationMiddleware(CreateUserDto, 'body', true), this.usersController.updateUser);
    // this.router.delete(`${this.path}/:id(\\d+)`, this.usersController.deleteUser);
  }
}

export default UsersRoute;
