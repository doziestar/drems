"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const tenant_service_1 = (0, tslib_1.__importDefault)(require("@services/tenant.service"));
class TenantController {
    constructor() {
        this.tenantService = new tenant_service_1.default();
        this.getTenants = async (req, res, next) => {
            try {
                const findAllTenantsData = await this.tenantService.getTenants();
                res.status(200).json({ data: findAllTenantsData, message: 'findAll' });
            }
            catch (error) {
                next(error);
            }
        };
        this.getTenantById = async (req, res, next) => {
            try {
                const tenantId = Number(req.params.id);
                const findOneTenantData = await this.tenantService.getTenantById(tenantId);
                res.status(200).json({ data: findOneTenantData, message: 'findOne' });
            }
            catch (error) {
                next(error);
            }
        };
        this.createTenant = async (req, res, next) => {
            try {
                const tenantData = req.body;
                const createTenantData = await this.tenantService.createTenant(tenantData);
                res.status(201).json({ data: createTenantData, message: 'created' });
            }
            catch (error) {
                next(error);
            }
        };
        this.updateTenant = async (req, res, next) => {
            try {
                const tenantId = Number(req.params.id);
                const tenantData = req.body;
                const updateTenantData = await this.tenantService.updateTenant(tenantId, tenantData);
                res.status(200).json({ data: updateTenantData, message: 'updated' });
            }
            catch (error) {
                next(error);
            }
        };
        this.deleteTenant = async (req, res, next) => {
            try {
                const tenantId = Number(req.params.id);
                const deleteTenantData = await this.tenantService.deleteTenant(tenantId);
                res.status(200).json({ data: deleteTenantData, message: 'deleted' });
            }
            catch (error) {
                next(error);
            }
        };
    }
}
exports.default = TenantController;
//# sourceMappingURL=tenants.controller.js.map