import { NextFunction, Request, Response } from 'express';
declare class PropertyManagerController {
    propertyManager: any;
    getPropertyManagers(req: Request, res: Response, next: NextFunction): Promise<Response | void>;
    getPropertyManagerById(req: Request, res: Response, next: NextFunction): Promise<Response | void>;
    createPropertyManager(req: Request, res: Response, next: NextFunction): Promise<Response | void>;
    updatePropertyManager(req: Request, res: Response, next: NextFunction): Promise<Response | void>;
    deletePropertyManager(req: Request, res: Response, next: NextFunction): Promise<Response | void>;
    getPropertyManagerByLandlordId(req: Request, res: Response, next: NextFunction): Promise<Response | void>;
    getPropertyManagerByPropertyId(req: Request, res: Response, next: NextFunction): Promise<Response | void>;
}
export default PropertyManagerController;
