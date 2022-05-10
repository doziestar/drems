"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const config_1 = (0, tslib_1.__importDefault)(require("config"));
const sequelize_1 = require("sequelize");
const env = process.env.NODE_ENV || 'production';
console.log(`ENV: ${env}`);
let sequelize;
if (env === 'production') {
    sequelize = new sequelize_1.Sequelize(config_1.default.get('database.name'), config_1.default.get('database.user'), config_1.default.get('database.password'), {
        dialect: 'postgres',
        host: config_1.default.get('database.host'),
        dialectOptions: {
            ssl: true,
        },
    });
}
else {
    sequelize = new sequelize_1.Sequelize(config_1.default.get('db'), { dialect: 'postgres' });
}
exports.default = sequelize;
