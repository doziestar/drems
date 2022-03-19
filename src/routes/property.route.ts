import { PropertyController } from '@controllers/property.controller';
import { CreatePropertyDto } from '@dtos/property.dto';
import { Routes } from '@interfaces/routes.interface';
import validationMiddleware from '@middlewares/validation.middleware';
import { Router } from 'express';

class PropertyRoute implements Routes {
  public path = '/property';
  public router = Router();
  public propertyController = new PropertyController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    // this.router.get(`${this.path}`, this.propertyController.getProperties);
    // this.router.get(`${this.path}/:id(\\d+)`, this.usersController.getUserById);
    this.router.post(`${this.path}`, validationMiddleware(CreatePropertyDto, 'body', true), this.propertyController.createProperty);
    // this.router.put(`${this.path}/:id(\\d+)`, validationMiddleware([IProperty, string], 'body', true), this.propertyController.updateProperty);
    this.router.delete(`${this.path}/:id(\\d+)`, this.propertyController.deleteProperty);
  }
}

export default PropertyRoute;
