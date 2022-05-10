import { PolicyController } from '../controllers/policy.controller';
import { Routes } from '../interfaces/routes.interface';
export declare class PolicyRoutes implements Routes {
    path: string;
    router: import("express-serve-static-core").Router;
    policyController: PolicyController;
    constructor();
    private initializeRoutes;
}
