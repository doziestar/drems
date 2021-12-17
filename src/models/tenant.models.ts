// tenant model

import { Tenant } from '@interfaces/tenant.interface';
import { Document, model, Schema } from 'mongoose';

const TenantSchema: Schema = new Schema({
  name: {
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
  property: {
    type: Schema.Types.ObjectId,
    ref: 'Property',
    required: true,
  },
  rent: {
    type: Number,
    required: true,
  },
  startDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Date,
    required: true,
  },
  isActive: {
    type: Boolean,
    required: true,
  },
});

const TenantModel = model<Tenant & Document>('Tenant', TenantSchema);

export { TenantModel };
