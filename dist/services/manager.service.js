// // services for property manager
// import { HttpException } from '../exceptions/HttpException';
// import { PropertyManager } from '../interfaces/managers.interface';
// import { PropertyManager as PropertyManagerModel } from '../models/managers.models';
// class PropertyManagerService {
//   public async getPropertyManagers(): Promise<PropertyManager[]> {
//     const propertyManagers: PropertyManager[] = await PropertyManagerModel.find();
//     return propertyManagers;
//   }
//   public async getPropertyManagerById(propertyManagerId: string): Promise<PropertyManager> {
//     const propertyManager: PropertyManager = await PropertyManagerModel.findById(propertyManagerId);
//     if (!propertyManager) {
//       throw new HttpException(404, 'Property Manager not found');
//     }
//     return propertyManager;
//   }
//   public async createPropertyManager(propertyManagerData: PropertyManager): Promise<PropertyManager> {
//     const propertyManager: PropertyManager = await PropertyManagerModel.create(propertyManagerData);
//     return propertyManager;
//   }
//   public async updatePropertyManager(propertyManagerId: string, propertyManagerData: PropertyManager): Promise<PropertyManager> {
//     const propertyManager: PropertyManager = await PropertyManagerModel.findByIdAndUpdate(propertyManagerId, propertyManagerData, { new: true });
//     if (!propertyManager) {
//       throw new HttpException(404, 'Property Manager not found');
//     }
//     return propertyManager;
//   }
//   public async deletePropertyManager(propertyManagerId: string): Promise<PropertyManager> {
//     const propertyManager: PropertyManager = await PropertyManagerModel.findByIdAndDelete(propertyManagerId);
//     if (!propertyManager) {
//       throw new HttpException(404, 'Property Manager not found');
//     }
//     return propertyManager;
//   }
//   public async getPropertyManagerByLandlordId(landlordId: string): Promise<PropertyManager> {
//     const propertyManager: PropertyManager = await PropertyManagerModel.findOne({ landlord: landlordId });
//     if (!propertyManager) {
//       throw new HttpException(404, 'Property Manager not found');
//     }
//     return propertyManager;
//   }
//   public async getPropertyManagerByPropertyId(propertyId: string): Promise<PropertyManager> {
//     const propertyManager: PropertyManager = await PropertyManagerModel.findOne({ property: propertyId });
//     if (!propertyManager) {
//       throw new HttpException(404, 'Property Manager not found');
//     }
//     return propertyManager;
//   }
// }
// export default PropertyManagerService;
