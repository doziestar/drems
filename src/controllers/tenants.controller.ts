import { Tenant } from '@interfaces/tenant.interface';
import TenantService from '@services/tenant.service';
import { NextFunction, Request, Response } from 'express';

class TenantController {
  public tenantService = new TenantService();

  public getTenants = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const findAllTenantsData: Tenant[] = await this.tenantService.getTenants();

      res.status(200).json({ data: findAllTenantsData, message: 'findAll' });
    } catch (error) {
      next(error);
    }
  };

  public getTenantById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const tenantId = Number(req.params.id);
      const findOneTenantData: Tenant = await this.tenantService.getTenantById(tenantId);

      res.status(200).json({ data: findOneTenantData, message: 'findOne' });
    } catch (error) {
      next(error);
    }
  };

  public createTenant = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const tenantData: Tenant = req.body;
      const createTenantData: Tenant = await this.tenantService.createTenant(tenantData);

      res.status(201).json({ data: createTenantData, message: 'created' });
    } catch (error) {
      next(error);
    }
  };

  public updateTenant = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const tenantId = Number(req.params.id);
      const tenantData: Tenant = req.body;
      const updateTenantData: Tenant[] = await this.tenantService.updateTenant(tenantId, tenantData);

      res.status(200).json({ data: updateTenantData, message: 'updated' });
    } catch (error) {
      next(error);
    }
  };

  public deleteTenant = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const tenantId = Number(req.params.id);
      const deleteTenantData: Tenant[] = await this.tenantService.deleteTenant(tenantId);

      res.status(200).json({ data: deleteTenantData, message: 'deleted' });
    } catch (error) {
      next(error);
    }
  };
}

export default TenantController;
