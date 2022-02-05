"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const auth_controller_1 = (0, tslib_1.__importDefault)(require("@controllers/auth.controller"));
const users_dto_1 = require("@dtos/users.dto");
const validation_middleware_1 = (0, tslib_1.__importDefault)(require("@middlewares/validation.middleware"));
const express_1 = require("express");
class AuthRoute {
    constructor() {
        this.path = '/auth/';
        this.router = (0, express_1.Router)();
        this.authController = new auth_controller_1.default();
        this.initializeRoutes();
    }
    initializeRoutes() {
        this.router.post(`${this.path}signup`, (0, validation_middleware_1.default)(users_dto_1.CreateUserDto, 'body', true), this.authController.signUp);
        this.router.post(`${this.path}login`, (0, validation_middleware_1.default)(users_dto_1.CreateUserDto, 'body', true), this.authController.logIn);
        // this.router.post(`${this.path}logout`, authMiddleware, this.authController.logOut);
    }
}
exports.default = AuthRoute;
//# sourceMappingURL=auth.route.js.map