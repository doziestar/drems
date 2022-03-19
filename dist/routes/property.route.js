"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const property_controller_1 = require("../controllers/property.controller");
const property_dto_1 = require("../dtos/property.dto");
const validation_middleware_1 = (0, tslib_1.__importDefault)(require("../middlewares/validation.middleware"));
const express_1 = require("express");
class PropertyRoute {
    constructor() {
        this.path = '/property';
        this.router = (0, express_1.Router)();
        this.propertyController = new property_controller_1.PropertyController();
        this.initializeRoutes();
    }
    initializeRoutes() {
        // this.router.get(`${this.path}`, this.propertyController.getProperties);
        // this.router.get(`${this.path}/:id(\\d+)`, this.usersController.getUserById);
        this.router.post(`${this.path}`, (0, validation_middleware_1.default)(property_dto_1.CreatePropertyDto, 'body'), this.propertyController.createProperty);
        // this.router.put(`${this.path}/:id(\\d+)`, validationMiddleware([IProperty, string], 'body', true), this.propertyController.updateProperty);
        this.router.delete(`${this.path}/:id(\\d+)`, this.propertyController.deleteProperty);
    }
}
exports.default = PropertyRoute;
