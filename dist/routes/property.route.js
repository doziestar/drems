"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import validationMiddleware from '../middlewares/validation.middleware';
const express_1 = require("express");
class PropertyRoute {
    // public propertyController = new PropertyController();
    constructor() {
        this.path = '/property';
        this.router = (0, express_1.Router)();
        this.initializeRoutes();
    }
    initializeRoutes() {
        // this.router.get(`${this.path}`, this.propertyController.getProperties);
        // this.router.get(`${this.path}/:id(\\d+)`, this.usersController.getUserById);
        // this.router.post(`${this.path}`, validationMiddleware(CreatePropertyDto, 'body', true), this.propertyController.createProperty);
        // // this.router.put(`${this.path}/:id(\\d+)`, validationMiddleware([IProperty, string], 'body', true), this.propertyController.updateProperty);
        // this.router.delete(`${this.path}/:id(\\d+)`, this.propertyController.deleteProperty);
    }
}
exports.default = PropertyRoute;
