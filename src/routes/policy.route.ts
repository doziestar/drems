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
    /*
     * @swagger
      * /api/v1/policies:
      *   get:
      *     description: Returns all policies
      *     produces:
      *       - application/json
      *     responses:
      *       '200':
      *         description: A successful response
      *         schema:
      *           $ref: '#/definitions/Policy'
      *       '500':
      *         description: An error occurred
      *         schema:
      *           $ref: '#/definitions/Error'
          definitions:
            Policy:
              type: object
              properties:
                id:
                  type: integer
                  format: int64
                name:
                  type: string
                description:
                  type: string
                createdAt:
                  type: string
                  format: date-time
                updatedAt:
                  type: string

     */
    this.router.get(`${this.path}`, this.policyController.index);
    this.router.get(`${this.path}/:id`, this.policyController.show);
    this.router.post(`${this.path}`, this.policyController.create);
    this.router.put(`${this.path}/:id`, this.policyController.update);
    this.router.delete(`${this.path}/:id`, this.policyController.destroy);
  }
}
