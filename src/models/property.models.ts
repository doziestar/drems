// models for property

import { Model, Schema } from 'mongoose';

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

// const Property = {
//   schema: propertySchema,
//   collection: 'properties',
// };

// const PropertyModel = {
//   Property,
// };

const PropertyModel = new Model('Property', propertySchema);

export { PropertyModel };
