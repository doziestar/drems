import { BaseEntity } from '@entity/Base.entity';
export declare class Address extends BaseEntity {
    street: string;
    city: string;
    state: string;
    zip: string;
    country: string;
}
