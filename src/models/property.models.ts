// models for property

import { Property } from '@/interfaces/property.interface';
import { Document, model, Schema } from 'mongoose';

const propertySchema: Schema = new Schema({
  name: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  zip: {
    type: String,
    required: true,
  },
  landlord: {
    type: Schema.Types.ObjectId,
    ref: 'Landlord',
    required: true,
  },
  propertyManager: {
    type: Schema.Types.ObjectId,
    ref: 'PropertyManager',
    required: true,
  },
  tenants: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Tenant',
    },
  ],
});

const PropertyModel = model<Property & Document>('Property', propertySchema);

export { PropertyModel };
