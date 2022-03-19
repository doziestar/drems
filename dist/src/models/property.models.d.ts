import { Property } from '../../interfaces/property.interface';
import { Document } from 'mongoose';
declare const PropertyModel: import("mongoose").Model<Property & Document<any, any, any>, {}, {}, {}>;
export { PropertyModel };
