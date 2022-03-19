import { AddressDocument } from '../interfaces/shared.interface';
import { BaseEntity } from './Base.entity';
import { Profile } from './Profile.entity';
export declare class Address extends BaseEntity implements AddressDocument {
    street: string;
    city: string;
    state: string;
    zip: string;
    country: string;
    property: Address[];
    profile: Profile[];
}
