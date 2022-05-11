import { IUser } from '@/interfaces/users.interface';
import { User } from '@/models/User.model';
// import crypto from 'crypto';

class UserService {
  public users = User;

  public async getUsers(): Promise<IUser[]> {
    console.log('getUsers service');
    const users = await this.users.findAll();
    console.log('users service', users);
    if (!users) {
      throw new Error('Users not found');
    }
    return users;
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

export default UserService;
