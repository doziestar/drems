"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const manager_service_1 = require("@services/manager.service");
class PropertyManagerController {
    async getPropertyManagers(req, res, next) {
        try {
            const propertyManagers = await manager_service_1.PropertyManagerService.getPropertyManagers();
            return res.status(200).json(propertyManagers);
        }
        catch (error) {
            next(error);
        }
    }
    async getPropertyManagerById(req, res, next) {
        try {
            const propertyManager = await manager_service_1.PropertyManagerService.getPropertyManagerById(req.params.propertyManagerId);
            return res.status(200).json(propertyManager);
        }
        catch (error) {
            next(error);
        }
    }
    async createPropertyManager(req, res, next) {
        try {
            const propertyManager = await manager_service_1.PropertyManagerService.createPropertyManager(req.body);
            return res.status(201).json(propertyManager);
        }
        catch (error) {
            next(error);
        }
    }
    async updatePropertyManager(req, res, next) {
        try {
            const propertyManager = await manager_service_1.PropertyManagerService.updatePropertyManager(req.params.propertyManagerId, req.body);
            return res.status(200).json(propertyManager);
        }
        catch (error) {
            next(error);
        }
    }
    async deletePropertyManager(req, res, next) {
        try {
            const propertyManager = await manager_service_1.PropertyManagerService.deletePropertyManager(req.params.propertyManagerId);
            return res.status(200).json(propertyManager);
        }
        catch (error) {
            next(error);
        }
    }
    async getPropertyManagerByLandlordId(req, res, next) {
        try {
            const propertyManager = await manager_service_1.PropertyManagerService.getPropertyManagerByLandlordId(req.params.landlordId);
            return res.status(200).json(propertyManager);
        }
        catch (error) {
            next(error);
        }
    }
    async getPropertyManagerByPropertyId(req, res, next) {
        try {
            const propertyManager = await manager_service_1.PropertyManagerService.getPropertyManagerByPropertyId(req.params.propertyId);
            return res.status(200).json(propertyManager);
        }
        catch (error) {
            next(error);
        }
    }
}
exports.default = PropertyManagerController;
//# sourceMappingURL=managers.controller.js.map