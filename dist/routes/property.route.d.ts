import { Routes } from '../interfaces/routes.interface';
declare class PropertyRoute implements Routes {
    path: string;
    router: import("express-serve-static-core").Router;
    constructor();
    private initializeRoutes;
}
export default PropertyRoute;
