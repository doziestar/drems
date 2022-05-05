"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UdremsData = void 0;
const tslib_1 = require("tslib");
const typeorm_1 = require("typeorm");
const PostgressConnectionStringParser = (0, tslib_1.__importStar)(require("pg-connection-string"));
const connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/udrems';
const connectionOptions = PostgressConnectionStringParser.parse(connectionString);
exports.UdremsData = new typeorm_1.DataSource({
    name: 'udrems',
    type: 'postgres',
    host: connectionOptions.host,
    port: parseInt(connectionOptions.port),
    username: connectionOptions.user,
    password: connectionOptions.password,
    database: connectionOptions.database,
    logging: true,
    synchronize: true,
    entities: ['src/entity/**/*.ts'],
    migrations: ['src/migration/**/*.ts'],
    subscribers: ['src/subscriber/**/*.ts'],
});
