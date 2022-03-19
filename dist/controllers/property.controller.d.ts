import { PropertyRepository } from '../repositories/Property.repo';
import { NextFunction, Request, Response } from 'express';
export declare class PropertyController {
    propertyRepo: PropertyRepository;
    createProperty: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    updateProperty: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    deleteProperty: (req: Request, res: Response, next: NextFunction) => Promise<void>;
}
