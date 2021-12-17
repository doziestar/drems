import { PropertyManager } from '@/interfaces/managers.interface';
import { model, Schema } from 'mongoose';

// models for property manager

const propertyManagerSchema: Schema = new Schema({
  name: {
    type: String,
    required: true,
  },
  landlord: {
    type: Schema.Types.ObjectId,
    ref: 'Landlord',
    required: true,
  },
  properties: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Property',
    },
  ],
  tenants: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Tenant',
    },
  ],
});

const PropertyManager = model<PropertyManager & Document>('PropertyManager', propertyManagerSchema);

export { PropertyManager };
