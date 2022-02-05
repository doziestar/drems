import { General } from './general.interface';
import { PropertyManager } from './managers.interface';
import { Property } from './property.interface';
import { Tenant } from './tenant.interface';
interface Landlord extends General {
    properties: Property[];
    tenants: Tenant[];
    propertyManager: PropertyManager[];
}
export { Landlord };
