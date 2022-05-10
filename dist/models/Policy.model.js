"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Policy = void 0;
const tslib_1 = require("tslib");
const db_1 = (0, tslib_1.__importDefault)(require("../utils/db"));
const sequelize_1 = require("sequelize");
const User_model_1 = require("./User.model");
class Policy extends sequelize_1.Model {
}
exports.Policy = Policy;
Policy.init({
    id: {
        type: sequelize_1.DataTypes.UUID,
        primaryKey: true,
        defaultValue: sequelize_1.DataTypes.UUIDV4,
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    amountToEnsure: {
        type: sequelize_1.DataTypes.DECIMAL(10, 2),
        allowNull: false,
    },
    email: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    inceptionDate: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false,
    },
    installmentPayment: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    insuranceType: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    clientId: {
        type: sequelize_1.DataTypes.UUID,
        allowNull: false,
    },
}, {
    sequelize: db_1.default,
    modelName: 'Policy',
    tableName: 'policies',
    timestamps: true,
    paranoid: true,
});
User_model_1.User.hasMany(Policy, {
    foreignKey: 'clientId',
    as: 'policies',
});
Policy.belongsToMany(User_model_1.User, {
    through: 'user_policy',
    foreignKey: 'policyId',
    otherKey: 'userId',
    as: 'users',
});
