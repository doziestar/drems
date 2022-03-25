"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UdremsData = void 0;
const typeorm_1 = require("typeorm");
exports.UdremsData = new typeorm_1.DataSource({
    name: 'default',
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: '918273645dozie',
    database: 'udrems',
    logging: true,
    synchronize: true,
    entities: ['src/entity/**/*.ts'],
    migrations: ['src/migration/**/*.ts'],
    subscribers: ['src/subscriber/**/*.ts'],
});
