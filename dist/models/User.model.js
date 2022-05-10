"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const tslib_1 = require("tslib");
const db_1 = (0, tslib_1.__importDefault)(require("../utils/db"));
const Profile_model_1 = require("./Profile.model");
const bcrypt_1 = (0, tslib_1.__importDefault)(require("bcrypt"));
const jsonwebtoken_1 = (0, tslib_1.__importDefault)(require("jsonwebtoken"));
const sequelize_1 = require("sequelize");
class User extends sequelize_1.Model {
    async hashPassword() {
        const salt = await bcrypt_1.default.genSalt(10);
        try {
            this.password = await bcrypt_1.default.hash(this.password, salt);
        }
        catch (error) {
            throw new Error(error);
        }
    }
    comparePassword(password) {
        return bcrypt_1.default.compare(password, this.password);
    }
    async generateToken() {
        try {
            const payload = {
                id: this.id,
                email: this.email,
                phoneNumber: this.phoneNumber,
                isActive: this.isActive,
            };
            const token = await jsonwebtoken_1.default.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });
            return token;
        }
        catch (error) {
            throw new Error(error);
        }
    }
    async createProfile() {
        try {
            await Profile_model_1.Profile.create({
                userId: this.id,
            });
        }
        catch (error) {
            throw new Error(error);
        }
    }
}
exports.User = User;
User.init({
    id: {
        type: sequelize_1.DataTypes.UUID,
        primaryKey: true,
        defaultValue: sequelize_1.DataTypes.UUIDV4,
    },
    email: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    username: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    phoneNumber: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    isActive: {
        type: sequelize_1.DataTypes.BOOLEAN,
        defaultValue: true,
    },
    firstName: {
        type: sequelize_1.DataTypes.STRING,
        // allowNull: false,
    },
    lastName: {
        type: sequelize_1.DataTypes.STRING,
        // allowNull: false,
    },
    password: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    isVerified: {
        type: sequelize_1.DataTypes.BOOLEAN,
        defaultValue: false,
    },
    role: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        defaultValue: 'user',
    },
    fullName: {
        type: sequelize_1.DataTypes.VIRTUAL,
        get() {
            return `${this.firstName} ${this.lastName}`;
        },
    },
}, {
    sequelize: db_1.default,
    modelName: 'user',
    tableName: 'users',
    timestamps: true,
    paranoid: true,
    hooks: {
        beforeCreate: (user) => user.hashPassword(),
        // create profile
        afterCreate: (user) => user.createProfile(),
    },
});
User.hasOne(Profile_model_1.Profile, {
    foreignKey: 'userId',
    as: 'profile',
});
Profile_model_1.Profile.belongsTo(User, {
    foreignKey: 'userId',
    as: 'user',
});
