// // landlord model
// import { Landlord } from '../../interfaces/landlord.interface';
// import { model, Schema } from 'mongoose';
// const landlordSchema: Schema = new Schema({
//   name: {
//     type: String,
//     required: true,
//   },
//   email: {
//     type: String,
//     required: true,
//   },
//   phone: {
//     type: String,
//     required: true,
//   },
//   properties: [
//     {
//       type: Schema.Types.ObjectId,
//       ref: 'Property',
//     },
//   ],
//   propertyManagers: [
//     {
//       type: Schema.Types.ObjectId,
//       ref: 'PropertyManager',
//     },
//   ],
// });
// const Landlord = model<Landlord & Document>('Landlord', landlordSchema);
// export { Landlord };
