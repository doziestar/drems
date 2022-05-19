import { IUser } from '@/interfaces/users.interface';
import { IUserService } from '@/interfaces/userService.interface';
import { User } from '@/models/User.model';
// import crypto from 'crypto';

export class UserService implements IUserService {
  private users = User;

  public async getUsers(): Promise<IUser[]> {
    console.log('calling service getUsers');
    console.log('getUsers service');
    try {
      const users: IUser[] = await this.users.findAll();
      if (users.length === 0) {
        throw new Error('You have no users');
      }
      return users;
    } catch (error) {
      throw error;
    }
  }

  public async getUser(id: string): Promise<IUser> {
    const user = this.users.findOne({
      where: {
        id,
      },
    });
    if (!user) {
      throw new Error('User not found');
    }
    return user;
  }

  // public async createUser(user: IUser): Promise<{ newUser: IUser; password: string }> {
  //   // generate password
  //   const password = crypto.randomBytes(20).toString('hex');
  //   const newUser: IUser = this.users.create({
  //     username: user.username,
  //     email: user.email,
  //     phone: user.phoneNumber,
  //     password: password,
  //   });

  //   return { newUser, password };
  // }
}

// export default UserService;
