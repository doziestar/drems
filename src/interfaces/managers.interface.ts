// interface for property managers
// // language version: 3.0

import { General } from './general.interface';
import { Landlord } from './landlord.interface';
import { Property } from './property.interface';
import { Tenant } from './tenant.interface';

interface PropertyManager extends General {
  properties: Property[];
  landlord: Landlord;
  tenants: Tenant[];
}

export { PropertyManager };
