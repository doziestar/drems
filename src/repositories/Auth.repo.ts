/**
 * @author Chidozie C. Okafor
 * @description This is authentication repository for user authentication
 * @param {type} type
 */
import { CreateUserDto } from '@dtos/users.dto';
import { User } from '@entity/User.entity';
import { IAuthRepository } from '@interfaces/Authrepo.interface';
import { IUser } from '@interfaces/users.interface';
import { getRepository, Repository } from 'typeorm';

class AuthRepository implements IAuthRepository {
  public async signup(createUserDto: CreateUserDto): Promise<IUser> {
    const userRepository: Repository<User> = getRepository(User);
    userRepository.create(createUserDto);
    const user = await userRepository.save(createUserDto);
    return user;
  }

  public async login(loginUserDto: any): Promise<{ user: IUser; token: string }> {
    const userRepository: Repository<User> = getRepository(User);
    const user = await userRepository.findOne({
      where: { email: loginUserDto.email },
    });
    if (user) {
      const passwordMatch = await user.comparePassword(loginUserDto.password);
      if (passwordMatch) {
        const token = await user.generateToken();
        return {
          user,
          token,
        };
      }
    }
    throw new Error('Invalid credentials');
  }
}

export default AuthRepository;
