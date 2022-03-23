import { UdremsData } from '@/dataSource';
import { User } from '@/entity/User.entity';
import { isEmpty } from '@utils/util';
import { Repository } from 'typeorm';

class UserService {
  public users: Repository<User> = UdremsData.getRepository(User);

  public async checkUserExist(email: string): Promise<boolean> {
    const user = await this.users.findOne({ where: { email } });
    return isEmpty(user);
  }

  public async checkUserNameExist(userName: string): Promise<boolean> {
    const user = await this.users.findOne({ where: { userName } });
    return isEmpty(user);
  }

  public async checkUserPhoneExist(phoneNumber: string): Promise<boolean> {
    const user = await this.users.findOne({ where: { phoneNumber } });
    return isEmpty(user);
  }
}

export default UserService;
