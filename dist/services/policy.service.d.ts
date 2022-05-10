import { IPolicy } from '../interfaces/policy.interface';
export declare class PolicyService {
    create(policy: IPolicy): Promise<IPolicy>;
    index(): Promise<IPolicy[]>;
    show(id: string): Promise<IPolicy>;
    update(id: string, policy: IPolicy): Promise<void>;
    destroy(id: string): Promise<void>;
}
