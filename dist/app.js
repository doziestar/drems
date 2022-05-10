"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
process.env['NODE_CONFIG_DIR'] = __dirname + '/configs';
const error_middleware_1 = (0, tslib_1.__importDefault)(require("./middlewares/error.middleware"));
const db_1 = (0, tslib_1.__importDefault)(require("./utils/db"));
const logger_1 = require("./utils/logger");
const compression_1 = (0, tslib_1.__importDefault)(require("compression"));
const config_1 = (0, tslib_1.__importDefault)(require("config"));
const cookie_parser_1 = (0, tslib_1.__importDefault)(require("cookie-parser"));
const cors_1 = (0, tslib_1.__importDefault)(require("cors"));
const express_1 = (0, tslib_1.__importDefault)(require("express"));
const helmet_1 = (0, tslib_1.__importDefault)(require("helmet"));
const hpp_1 = (0, tslib_1.__importDefault)(require("hpp"));
const morgan_1 = (0, tslib_1.__importDefault)(require("morgan"));
const swagger_jsdoc_1 = (0, tslib_1.__importDefault)(require("swagger-jsdoc"));
const swagger_ui_express_1 = (0, tslib_1.__importDefault)(require("swagger-ui-express"));
class App {
    constructor(routes) {
        this.app = (0, express_1.default)();
        this.port = process.env.PORT || 3000;
        this.env = process.env.NODE_ENV || 'development';
        this.initializeMiddlewares();
        this.initializeRoutes(routes);
        this.initializeSwagger();
        this.initializeErrorHandling();
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
            this.app.use('/api/v1', route.router);
        });
    }
    initializeSwagger() {
        const options = {
            swaggerDefinition: {
                info: {
                    title: 'Briza API Demo',
                    version: '1.0.0',
                    description: 'Creating Briza Insurance API For Developers',
                },
            },
            apis: ['src/swaggerdocs/*.yaml', 'src/routes/*.ts'],
        };
        const specs = (0, swagger_jsdoc_1.default)(options);
        this.app.use('/api', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(specs, {
            explorer: true,
            swaggerOptions: {
                nativeUI: true,
                validatorUrl: null,
                components: {
                    securitySchemes: {
                        bearerAuth: {
                            type: 'http',
                            scheme: 'bearer',
                            bearerFormat: 'JWT',
                        },
                    },
                },
                security: [
                    {
                        bearerAuth: [],
                    },
                ],
            },
        }));
    }
    async initializeDatabase() {
        db_1.default
            .authenticate()
            .then(() => {
            logger_1.logger.info('🚀 Database connected');
        })
            .catch(err => {
            logger_1.logger.error('🚨 Database connection error: ' + err);
        });
        const isDev = this.env === 'development';
        await db_1.default.sync({ alter: isDev });
    }
    initializeErrorHandling() {
        this.app.use(error_middleware_1.default);
    }
}
exports.default = App;
