import { getRepository, Repository } from 'typeorm';
import { User } from '../entity/User';

export class UserRepository {
  private userRepository: Repository<User>;

  constructor() {
    this.userRepository = getRepository(User);
  }

  public async findAll(): Promise<User[]> {
    return await this.userRepository.find();
  }

  public async findOne(id: number): Promise<User> {
    return await this.userRepository.findOne(id);
  }

  public async save(user: User): Promise<User> {
    return await this.userRepository.save(user);
  }

  public async remove(user: User): Promise<void> {
    await this.userRepository.remove(user);
  }
}
