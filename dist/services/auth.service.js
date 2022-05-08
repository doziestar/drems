"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const HttpException_1 = require("../exceptions/HttpException");
const User_model_1 = (0, tslib_1.__importDefault)(require("../models/User.model"));
const util_1 = require("../utils/util");
const config_1 = (0, tslib_1.__importDefault)(require("config"));
const jsonwebtoken_1 = (0, tslib_1.__importDefault)(require("jsonwebtoken"));
class AuthService {
    constructor() {
        this.users = User_model_1.default;
    }
    async signup(userData) {
        if ((0, util_1.isEmpty)(userData))
            throw new HttpException_1.HttpException(400, "You're not userData");
        const findUser = this.users.findOne({ where: { email: userData.email } });
        if (findUser)
            throw new HttpException_1.HttpException(409, `You're email ${userData.email} already exists`);
        const createUserData = this.users.create(userData);
        return createUserData;
    }
    // public async login(userData: CreateUserDto): Promise<{ cookie: string; findUser: UserResponse }> {
    //   if (isEmpty(userData)) throw new HttpException(400, "You're not userData");
    //   const findUser: UserResponse = this.users.findOne({ where: { email: userData.email } });
    //   if (!findUser) throw new HttpException(409, `You're email ${userData.email} not found`);
    //   const isPasswordMatching: boolean = await bcrypt.compare(userData.password, findUser.password);
    //   if (!isPasswordMatching) throw new HttpException(409, "You're password not matching");
    //   const tokenData = this.createToken(findUser);
    //   const cookie = this.createCookie(tokenData);
    //   return { cookie, findUser };
    // }
    async logout(userData) {
        if ((0, util_1.isEmpty)(userData))
            throw new HttpException_1.HttpException(400, "You're not userData");
        const findUser = this.users.findOne({ where: { email: userData.email } });
        if (!findUser)
            throw new HttpException_1.HttpException(409, "You're not user");
        return findUser;
    }
    createToken(user) {
        const dataStoredInToken = { id: user.id };
        const secretKey = config_1.default.get('secretKey');
        const expiresIn = 60 * 60;
        return { expiresIn, token: jsonwebtoken_1.default.sign(dataStoredInToken, secretKey, { expiresIn }) };
    }
    createCookie(tokenData) {
        return `Authorization=${tokenData.token}; HttpOnly; Max-Age=${tokenData.expiresIn};`;
    }
}
exports.default = AuthService;
//# sourceMappingURL=auth.service.js.map