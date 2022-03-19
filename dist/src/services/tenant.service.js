"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import { CreateTenantDto } from "../../dtos/tenant.dto";
const HttpException_1 = require("../../exceptions/HttpException");
const tenant_models_1 = require("../../models/tenant.models");
class TenantService {
    constructor() {
        this.tenants = tenant_models_1.TenantModel;
        this.getTenants = async () => {
            const tenants = await this.tenants.find();
            return tenants;
        };
        this.getTenantById = async (id) => {
            const tenant = await this.tenants.findById(id);
            if (!tenant) {
                throw new HttpException_1.HttpException(404, 'Tenant not found');
            }
            return tenant;
        };
        this.createTenant = async (tenant) => {
            const newTenant = await this.tenants.create(tenant);
            return newTenant;
        };
        this.updateTenant = async (id, tenant) => {
            const updatedTenant = await this.tenants.findByIdAndUpdate(id, tenant, { new: true });
            if (!updatedTenant) {
                throw new HttpException_1.HttpException(404, 'Tenant not found');
            }
            return updatedTenant;
        };
        this.deleteTenant = async (id) => {
            const deletedTenant = await this.tenants.findByIdAndDelete(id);
            if (!deletedTenant) {
                throw new HttpException_1.HttpException(404, 'Tenant not found');
            }
            return deletedTenant;
        };
        this.getTenantsByLandlordId = async (landlordId) => {
            const tenants = await this.tenants.find({ landlord: landlordId });
            return tenants;
        };
        this.getTenantsByPropertyManagerId = async (propertyManagerId) => {
            const tenants = await this.tenants.find({ propertyManager: propertyManagerId });
            return tenants;
        };
        this.getTenantsByPropertyId = async (propertyId) => {
            const tenants = await this.tenants.find({ property: propertyId });
            return tenants;
        };
        this.getTenantsByRent = async (rent) => {
            const tenants = await this.tenants.find({ rent: rent });
            return tenants;
        };
        this.getTenantsByStartDate = async (startDate) => {
            const tenants = await this.tenants.find({ startDate: startDate });
            return tenants;
        };
        this.getTenantsByEndDate = async (endDate) => {
            const tenants = await this.tenants.find({ endDate: endDate });
            return tenants;
        };
        this.getTenantsByIsActive = async (isActive) => {
            const tenants = await this.tenants.find({ isActive: isActive });
            return tenants;
        };
        this.getTenantsByLandlordIdAndPropertyManagerId = async (landlordId, propertyManagerId) => {
            const tenants = await this.tenants.find({ landlord: landlordId, propertyManager: propertyManagerId });
            return tenants;
        };
        this.getTenantsByLandlordIdAndPropertyId = async (landlordId, propertyId) => {
            const tenants = await this.tenants.find({ landlord: landlordId, property: propertyId });
            return tenants;
        };
        this.getTenantsByLandlordIdAndRent = async (landlordId, rent) => {
            const tenants = await this.tenants.find({ landlord: landlordId, rent: rent });
            return tenants;
        };
        this.getTenantsByLandlordIdAndStartDate = async (landlordId, startDate) => {
            const tenants = await this.tenants.find({ landlord: landlordId, startDate: startDate });
            return tenants;
        };
        this.landlordCreateTenant = async (landlordId, tenant) => {
            const newTenant = await this.tenants.create(Object.assign({ landlord: landlordId }, tenant));
            return newTenant;
        };
        this.propertyManagerCreateTenant = async (propertyManagerId, tenant) => {
            const newTenant = await this.tenants.create(Object.assign({ propertyManager: propertyManagerId }, tenant));
            return newTenant;
        };
    }
}
exports.default = TenantService;
