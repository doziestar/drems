import { PolicyService } from '../services/policy.service';
import { NextFunction, Request, Response } from 'express';
export declare class PolicyController {
    policyService: PolicyService;
    index: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    show: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    create: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    update: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    destroy: (req: Request, res: Response, next: NextFunction) => Promise<void>;
}
