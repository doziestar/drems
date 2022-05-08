"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// services for property manager
const http_exception_1 = require("@exceptions/http.exception");
const managers_models_1 = require("../models/managers.models");
class PropertyManagerService {
    async getPropertyManagers() {
        const propertyManagers = await managers_models_1.PropertyManager.find();
        return propertyManagers;
    }
    async getPropertyManagerById(propertyManagerId) {
        const propertyManager = await managers_models_1.PropertyManager.findById(propertyManagerId);
        if (!propertyManager) {
            throw new http_exception_1.HttpException(404, 'Property Manager not found');
        }
        return propertyManager;
    }
    async createPropertyManager(propertyManagerData) {
        const propertyManager = await managers_models_1.PropertyManager.create(propertyManagerData);
        return propertyManager;
    }
    async updatePropertyManager(propertyManagerId, propertyManagerData) {
        const propertyManager = await managers_models_1.PropertyManager.findByIdAndUpdate(propertyManagerId, propertyManagerData, { new: true });
        if (!propertyManager) {
            throw new http_exception_1.HttpException(404, 'Property Manager not found');
        }
        return propertyManager;
    }
    async deletePropertyManager(propertyManagerId) {
        const propertyManager = await managers_models_1.PropertyManager.findByIdAndDelete(propertyManagerId);
        if (!propertyManager) {
            throw new http_exception_1.HttpException(404, 'Property Manager not found');
        }
        return propertyManager;
    }
    async getPropertyManagerByLandlordId(landlordId) {
        const propertyManager = await managers_models_1.PropertyManager.findOne({ landlord: landlordId });
        if (!propertyManager) {
            throw new http_exception_1.HttpException(404, 'Property Manager not found');
        }
        return propertyManager;
    }
    async getPropertyManagerByPropertyId(propertyId) {
        const propertyManager = await managers_models_1.PropertyManager.findOne({ property: propertyId });
        if (!propertyManager) {
            throw new http_exception_1.HttpException(404, 'Property Manager not found');
        }
        return propertyManager;
    }
}
exports.default = PropertyManagerService;
//# sourceMappingURL=manager.service.js.map