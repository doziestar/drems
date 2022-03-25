// // import { CreateTenantDto } from "../dtos/tenant.dto";
// import { HttpException } from '../exceptions/HttpException';
// import { Tenant } from '../interfaces/tenant.interface';
// import { TenantModel } from '../models/tenant.models';
// class TenantService {
//   public tenants = TenantModel;
//   public getTenants = async (): Promise<Tenant[]> => {
//     const tenants = await this.tenants.find();
//     return tenants;
//   };
//   public getTenantById = async (id: number): Promise<Tenant> => {
//     const tenant = await this.tenants.findById(id);
//     if (!tenant) {
//       throw new HttpException(404, 'Tenant not found');
//     }
//     return tenant;
//   };
//   public createTenant = async (tenant: Tenant): Promise<Tenant> => {
//     const newTenant = await this.tenants.create(tenant);
//     return newTenant;
//   };
//   public updateTenant = async (id: number, tenant: Tenant): Promise<Tenant> => {
//     const updatedTenant = await this.tenants.findByIdAndUpdate(id, tenant, { new: true });
//     if (!updatedTenant) {
//       throw new HttpException(404, 'Tenant not found');
//     }
//     return updatedTenant;
//   };
//   public deleteTenant = async (id: number): Promise<Tenant> => {
//     const deletedTenant = await this.tenants.findByIdAndDelete(id);
//     if (!deletedTenant) {
//       throw new HttpException(404, 'Tenant not found');
//     }
//     return deletedTenant;
//   };
//   public getTenantsByLandlordId = async (landlordId: number): Promise<Tenant[]> => {
//     const tenants = await this.tenants.find({ landlord: landlordId });
//     return tenants;
//   };
//   public getTenantsByPropertyManagerId = async (propertyManagerId: number): Promise<Tenant[]> => {
//     const tenants = await this.tenants.find({ propertyManager: propertyManagerId });
//     return tenants;
//   };
//   public getTenantsByPropertyId = async (propertyId: number): Promise<Tenant[]> => {
//     const tenants = await this.tenants.find({ property: propertyId });
//     return tenants;
//   };
//   public getTenantsByRent = async (rent: number): Promise<Tenant[]> => {
//     const tenants = await this.tenants.find({ rent: rent });
//     return tenants;
//   };
//   public getTenantsByStartDate = async (startDate: Date): Promise<Tenant[]> => {
//     const tenants = await this.tenants.find({ startDate: startDate });
//     return tenants;
//   };
//   public getTenantsByEndDate = async (endDate: Date): Promise<Tenant[]> => {
//     const tenants = await this.tenants.find({ endDate: endDate });
//     return tenants;
//   };
//   public getTenantsByIsActive = async (isActive: boolean): Promise<Tenant[]> => {
//     const tenants = await this.tenants.find({ isActive: isActive });
//     return tenants;
//   };
//   public getTenantsByLandlordIdAndPropertyManagerId = async (landlordId: number, propertyManagerId: number): Promise<Tenant[]> => {
//     const tenants = await this.tenants.find({ landlord: landlordId, propertyManager: propertyManagerId });
//     return tenants;
//   };
//   public getTenantsByLandlordIdAndPropertyId = async (landlordId: number, propertyId: number): Promise<Tenant[]> => {
//     const tenants = await this.tenants.find({ landlord: landlordId, property: propertyId });
//     return tenants;
//   };
//   public getTenantsByLandlordIdAndRent = async (landlordId: number, rent: number): Promise<Tenant[]> => {
//     const tenants = await this.tenants.find({ landlord: landlordId, rent: rent });
//     return tenants;
//   };
//   public getTenantsByLandlordIdAndStartDate = async (landlordId: number, startDate: Date): Promise<Tenant[]> => {
//     const tenants = await this.tenants.find({ landlord: landlordId, startDate: startDate });
//     return tenants;
//   };
//   public landlordCreateTenant = async (landlordId: number, tenant: Tenant): Promise<Tenant> => {
//     const newTenant = await this.tenants.create({ landlord: landlordId, ...tenant });
//     return newTenant;
//   };
//   public propertyManagerCreateTenant = async (propertyManagerId: number, tenant: Tenant): Promise<Tenant> => {
//     const newTenant = await this.tenants.create({ propertyManager: propertyManagerId, ...tenant });
//     return newTenant;
//   };
// }
// export default TenantService;
