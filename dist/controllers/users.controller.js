// // import userService from '../services/users.service';
// import { NextFunction, Request, Response } from 'express';
// class UsersController {
//   public userService = new userService();
//   public checkPhone = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
//     try {
//       const exist = await this.userService.checkUserPhoneExist(req.body);
//       res.status(200).json({ data: exist, message: 'check phone exist' });
//     } catch (error) {
//       next(error);
//     }
//   };
//   public checkEmail = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
//     try {
//       const exist = await this.userService.checkUserExist(req.body);
//       res.status(200).json({ data: exist, message: 'Check Email Exist' });
//     } catch (error) {
//       next(error);
//     }
//   };
//   public checkUserName = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
//     try {
//       const exist = await this.userService.checkUserNameExist(req.body);
//       res.status(201).json({ data: exist, message: 'Check UserName Exist' });
//     } catch (error) {
//       next(error);
//     }
//   };
// }
// export default UsersController;
