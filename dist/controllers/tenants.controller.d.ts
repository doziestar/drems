import TenantService from '@services/tenant.service';
import { NextFunction, Request, Response } from 'express';
declare class TenantController {
    tenantService: TenantService;
    getTenants: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    getTenantById: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    createTenant: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    updateTenant: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    deleteTenant: (req: Request, res: Response, next: NextFunction) => Promise<void>;
}
export default TenantController;
