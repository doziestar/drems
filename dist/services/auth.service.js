"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @author Chidozie C. Okafor
 * @description This is authentication repository for user authentication
 * @param {type} type
 */
const Profile_model_1 = require("../models/Profile.model");
const HttpException_1 = require("../exceptions/HttpException");
const User_model_1 = require("../models/User.model");
class AuthService {
    constructor() {
        this.users = User_model_1.User;
    }
    async signup(createUserDto) {
        const userExist = await this.users.findOne({
            where: { email: createUserDto.email },
        });
        if (userExist)
            throw new HttpException_1.HttpException(409, 'user already exist');
        const userExist2 = await this.users.findOne({ where: { username: createUserDto.username } });
        if (userExist2)
            throw new HttpException_1.HttpException(409, 'username already exist');
        const userExist3 = await this.users.findOne({ where: { phoneNumber: createUserDto.phoneNumber } });
        if (userExist3)
            throw new HttpException_1.HttpException(409, 'Phone number already exist');
        const data = await this.users.create({
            email: createUserDto.email,
            phoneNumber: createUserDto.phoneNumber,
            username: createUserDto.username,
            password: createUserDto.password,
        });
        const user = await this.users.findOne({
            where: { id: data.id },
            include: [{ model: Profile_model_1.Profile, as: 'profile' }],
        });
        // generate token
        const { expiresIn, token } = await this.createToken(user);
        return { user, token, expiresIn };
    }
    async login(loginUserDto) {
        const user = await this.users.findOne({
            where: { email: loginUserDto.email },
        });
        if (!user)
            throw new HttpException_1.HttpException(401, 'Invalid email or password');
        const passwordMatch = await user.comparePassword(loginUserDto.password);
        if (!passwordMatch)
            throw new HttpException_1.HttpException(401, 'Invalid email or password');
        const { expiresIn, token } = await this.createToken(user);
        return {
            user,
            token,
            expiresIn,
        };
    }
    async createToken(user) {
        const HOUR_IN_SECONDS = 3600;
        const expiresIn = HOUR_IN_SECONDS;
        return {
            expiresIn,
            token: await user.generateToken(),
        };
    }
    createCookie(tokenData) {
        return `Authorization=${tokenData.token}; HttpOnly; Max-Age=${tokenData.expiresIn};`;
    }
}
exports.default = AuthService;
