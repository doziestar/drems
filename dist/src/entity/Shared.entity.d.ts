import { AddressDocument } from '../../interfaces/shared.interface';
import { BaseEntity } from '../../entity/Base.entity';
import { Profile } from '../../entity/Profile.entity';
export declare class Address extends BaseEntity implements AddressDocument {
    street: string;
    city: string;
    state: string;
    zip: string;
    country: string;
    property: Address[];
    profile: Profile[];
}
