"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const users_controller_1 = (0, tslib_1.__importDefault)(require("../controllers/users.controller"));
const express_1 = require("express");
class UsersRoute {
    constructor() {
        this.path = '/users';
        this.router = (0, express_1.Router)();
        this.usersController = new users_controller_1.default();
        this.initializeRoutes();
    }
    initializeRoutes() {
        this.router.get(`${this.path}/check/email`, this.usersController.checkEmail);
        this.router.get(`${this.path}/check/phone`, this.usersController.checkPhone);
        this.router.get(`${this.path}/check/username`, this.usersController.checkUserName);
        // this.router.post(`${this.path}`, validationMiddleware(CreateUserDto, 'body'), this.usersController.createUser);
        // this.router.put(`${this.path}/:id(\\d+)`, validationMiddleware(CreateUserDto, 'body', true), this.usersController.updateUser);
        // this.router.delete(`${this.path}/:id(\\d+)`, this.usersController.deleteUser);
    }
}
exports.default = UsersRoute;
