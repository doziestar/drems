"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
process.env['NODE_CONFIG_DIR'] = __dirname + '/configs';
const error_middleware_1 = (0, tslib_1.__importDefault)(require("./middlewares/error.middleware"));
const logger_1 = require("./utils/logger");
const compression_1 = (0, tslib_1.__importDefault)(require("compression"));
const config_1 = (0, tslib_1.__importDefault)(require("config"));
const cookie_parser_1 = (0, tslib_1.__importDefault)(require("cookie-parser"));
const cors_1 = (0, tslib_1.__importDefault)(require("cors"));
const express_1 = (0, tslib_1.__importDefault)(require("express"));
const helmet_1 = (0, tslib_1.__importDefault)(require("helmet"));
const hpp_1 = (0, tslib_1.__importDefault)(require("hpp"));
const morgan_1 = (0, tslib_1.__importDefault)(require("morgan"));
const sequelize_1 = require("sequelize");
const swagger_jsdoc_1 = (0, tslib_1.__importDefault)(require("swagger-jsdoc"));
const swagger_ui_express_1 = (0, tslib_1.__importDefault)(require("swagger-ui-express"));
class App {
    constructor(routes) {
        this.app = (0, express_1.default)();
        this.port = process.env.PORT || 3000;
        this.env = process.env.NODE_ENV || 'development';
        console.log('Initializing app...');
        this.initializeMiddlewares();
        console.log('Initializing routes...');
        this.initializeRoutes(routes);
        console.log('Initializing swagger...');
        this.initializeSwagger();
        console.log('Initializing error handling...');
        this.initializeErrorHandling();
        console.log('Initializing database...');
        this.initializeDatabase();
    }
    listen() {
        this.app.listen(this.port, () => {
            logger_1.logger.info(`=================================`);
            logger_1.logger.info(`======= ENV: ${this.env} =======`);
            logger_1.logger.info(`🚀 App listening on the port ${this.port}`);
            logger_1.logger.info(`=================================`);
        });
    }
    getServer() {
        return this.app;
    }
    initializeMiddlewares() {
        this.app.use((0, morgan_1.default)(config_1.default.get('log.format'), { stream: logger_1.stream }));
        this.app.use((0, cors_1.default)({ origin: config_1.default.get('cors.origin'), credentials: config_1.default.get('cors.credentials') }));
        this.app.use((0, hpp_1.default)());
        this.app.use((0, helmet_1.default)());
        this.app.use((0, compression_1.default)());
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: true }));
        this.app.use((0, cookie_parser_1.default)());
    }
    initializeRoutes(routes) {
        routes.forEach(route => {
            this.app.use('/', route.router);
        });
    }
    initializeSwagger() {
        const options = {
            swaggerDefinition: {
                info: {
                    title: 'Udrems Backend',
                    version: '1.0.0',
                    description: 'Udrems api backend',
                },
            },
            apis: ['swagger.yaml', 'src/controllers/**/*.ts', 'src/repository/**/*.ts'],
        };
        const specs = (0, swagger_jsdoc_1.default)(options);
        this.app.use('/api-docs', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(specs));
    }
    async initializeDatabase() {
        console.log('Initializing database...');
        const sequelize = new sequelize_1.Sequelize('postgres://postgres:918273645dozie@localhost:5432/drems');
        try {
            await sequelize.authenticate();
            console.log('Database connected successfully.');
        }
        catch (error) {
            throw new Error('Unable to connect to the database: ' + sequelize.config.database + '\n' + error);
            // console.error('Unable to connect to the database:', error);
        }
    }
    initializeErrorHandling() {
        this.app.use(error_middleware_1.default);
    }
}
exports.default = App;
//# sourceMappingURL=app.js.map