import { General } from './general.interface';
import { Landlord } from './landlord.interface';
import { PropertyManager } from './managers.interface';
import { Tenant } from './tenant.interface';
interface Property extends General {
    landlord: Landlord;
    tenants: Tenant[];
    propertyManager: PropertyManager;
}
export { Property };
