"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Profile = void 0;
const tslib_1 = require("tslib");
const db_1 = (0, tslib_1.__importDefault)(require("../utils/db"));
const sequelize_1 = require("sequelize");
class Profile extends sequelize_1.Model {
}
exports.Profile = Profile;
Profile.init({
    userId: {
        type: sequelize_1.DataTypes.UUID,
        primaryKey: true,
        defaultValue: sequelize_1.DataTypes.UUIDV4,
    },
    bio: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
    website: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
    location: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
    birthday: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
    avatar: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
}, {
    sequelize: db_1.default,
    modelName: 'profile',
    tableName: 'profiles',
    timestamps: false,
    paranoid: false,
});
