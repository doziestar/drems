"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const HttpException_1 = require("../exceptions/HttpException");
const config_1 = (0, tslib_1.__importDefault)(require("config"));
const jsonwebtoken_1 = (0, tslib_1.__importDefault)(require("jsonwebtoken"));
// import userModel from '../models/users.model';
const authMiddleware = async (req, res, next) => {
    try {
        const Authorization = req.cookies['Authorization'] || req.header('Authorization').split('Bearer ')[1] || null;
        if (Authorization) {
            const secretKey = config_1.default.get('secretKey');
            const verificationResponse = (await jsonwebtoken_1.default.verify(Authorization, secretKey));
            const userId = verificationResponse.id;
            // const findUser = userModel.find(user => user.id === userId);
            // if (findUser) {
            //   req.user = findUser;
            //   next();
            // } else {
            //   next(new HttpException(401, 'Wrong authentication token'));
            // }
        }
        else {
            next(new HttpException_1.HttpException(404, 'Authentication token missing'));
        }
    }
    catch (error) {
        next(new HttpException_1.HttpException(401, 'Wrong authentication token'));
    }
};
exports.default = authMiddleware;
