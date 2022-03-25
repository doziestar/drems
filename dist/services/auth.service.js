"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @author Chidozie C. Okafor
 * @description This is authentication repository for user authentication
 * @param {type} type
 */
const dataSource_1 = require("../dataSource");
const HttpException_1 = require("../exceptions/HttpException");
const User_entity_1 = require("../entity/User.entity");
class AuthService {
    async signup(createUserDto) {
        const userRepository = dataSource_1.UdremsData.getRepository(User_entity_1.User);
        const userExist = await userRepository.findOne({ where: { email: createUserDto.email } });
        if (userExist)
            throw new HttpException_1.HttpException(409, 'user already exist');
        const userExist2 = await userRepository.findOne({ where: { userName: createUserDto.userName } });
        if (userExist2)
            throw new HttpException_1.HttpException(409, 'username already exist');
        const userExist3 = await userRepository.findOne({ where: { phoneNumber: createUserDto.phoneNumber } });
        if (userExist3)
            throw new HttpException_1.HttpException(409, 'Phone number already exist');
        const user = await userRepository.create(createUserDto);
        const savedUser = await userRepository.save(user);
        return savedUser;
    }
    async login(loginUserDto) {
        const userRepository = dataSource_1.UdremsData.getRepository(User_entity_1.User);
        const user = await userRepository.findOne({
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
        const expiresIn = 60 * 60;
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
