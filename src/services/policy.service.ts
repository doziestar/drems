import { IPolicy } from '@/interfaces/policy.interface';
import { Policy } from '@/models/Policy.model';

export class PolicyService {
  public async create(policy: IPolicy): Promise<IPolicy> {
    const newPolicy = await Policy.create({
      ...policy,
    });

    return newPolicy;
  }
  public async index(): Promise<IPolicy[]> {
    const policies = await Policy.findAll();

    return policies;
  }

  public async show(id: string): Promise<IPolicy> {
    const policy = await Policy.findByPk(id);

    return policy;
  }

  public async update(id: string, policy: IPolicy): Promise<void> {
    const updatedPolicy = await Policy.update(policy, {
      where: {
        id,
      },
    });
    console.log(updatedPolicy);
    return;
  }

  public async destroy(id: string): Promise<void> {
    const deletedPolicy = await Policy.destroy({
      where: {
        id,
      },
    });

    console.log(deletedPolicy);

    return;
  }
}
