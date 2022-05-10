import { PolicyController } from '@/controllers/policy.controller';
import { Routes } from '@/interfaces/routes.interface';
import { Router } from 'express';

export class PolicyRoutes implements Routes {
  public path = '/policies';
  public router = Router();
  public policyController = new PolicyController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, this.policyController.index);
    this.router.get(`${this.path}/:id`, this.policyController.show);
    this.router.post(`${this.path}`, this.policyController.create);
    this.router.put(`${this.path}/:id`, this.policyController.update);
    this.router.delete(`${this.path}/:id`, this.policyController.destroy);
  }
}
