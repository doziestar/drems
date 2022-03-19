import { PropertyController } from '../controllers/property.controller';
import { Routes } from '../interfaces/routes.interface';
declare class PropertyRoute implements Routes {
    path: string;
    router: import("express-serve-static-core").Router;
    propertyController: PropertyController;
    constructor();
    private initializeRoutes;
}
export default PropertyRoute;
