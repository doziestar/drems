"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const users_service_1 = (0, tslib_1.__importDefault)(require("../services/users.service"));
class UsersController {
    constructor() {
        this.userService = new users_service_1.default();
        this.checkPhone = async (req, res, next) => {
            try {
                const exist = await this.userService.checkUserPhoneExist(req.body);
                res.status(200).json({ data: exist, message: 'check phone exist' });
            }
            catch (error) {
                next(error);
            }
        };
        this.checkEmail = async (req, res, next) => {
            try {
                const exist = await this.userService.checkUserExist(req.body);
                res.status(200).json({ data: exist, message: 'Check Email Exist' });
            }
            catch (error) {
                next(error);
            }
        };
        this.checkUserName = async (req, res, next) => {
            try {
                const exist = await this.userService.checkUserNameExist(req.body);
                res.status(201).json({ data: exist, message: 'Check UserName Exist' });
            }
            catch (error) {
                next(error);
            }
        };
    }
}
exports.default = UsersController;
