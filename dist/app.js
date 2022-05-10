process.env['NODE_CONFIG_DIR'] = __dirname + '/configs';
import errorMiddleware from './middlewares/error.middleware';
import sequelize from './utils/db';
import { logger, stream } from './utils/logger';
import compression from 'compression';
import config from 'config';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import express from 'express';
import helmet from 'helmet';
import hpp from 'hpp';
import morgan from 'morgan';
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
class App {
    constructor(routes) {
        this.app = express();
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
            logger.info(`=================================`);
            logger.info(`======= ENV: ${this.env} =======`);
            logger.info(`🚀 App listening on the port ${this.port}`);
            logger.info(`=================================`);
        });
    }
    getServer() {
        return this.app;
    }
    initializeMiddlewares() {
        this.app.use(morgan(config.get('log.format'), { stream }));
        this.app.use(cors({ origin: config.get('cors.origin'), credentials: config.get('cors.credentials') }));
        this.app.use(hpp());
        this.app.use(helmet());
        this.app.use(compression());
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));
        this.app.use(cookieParser());
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
            apis: ['src/swaggerdocs/*.yaml'],
        };
        const specs = swaggerJSDoc(options);
        this.app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs, {
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
        sequelize
            .authenticate()
            .then(() => {
            logger.info('🚀 Database connected');
        })
            .catch(err => {
            logger.error('🚨 Database connection error: ' + err);
        });
        const isDev = this.env === 'development';
        await sequelize.sync({ alter: isDev });
    }
    initializeErrorHandling() {
        this.app.use(errorMiddleware);
    }
}
export default App;
