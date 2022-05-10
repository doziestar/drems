"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PolicyRoutes = void 0;
const policy_controller_1 = require("../controllers/policy.controller");
const express_1 = require("express");
class PolicyRoutes {
    constructor() {
        this.path = '/policies';
        this.router = (0, express_1.Router)();
        this.policyController = new policy_controller_1.PolicyController();
        this.initializeRoutes();
    }
    initializeRoutes() {
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
exports.PolicyRoutes = PolicyRoutes;
