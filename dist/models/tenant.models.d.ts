import { Tenant } from '../interfaces/tenant.interface';
import { Document } from 'mongoose';
declare const TenantModel: import("mongoose").Model<Tenant & Document<any, any, any>, {}, {}, {}>;
export { TenantModel };
