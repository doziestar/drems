import config from 'config';
import { Sequelize } from 'sequelize';

const sequelize = new Sequelize(config.get('db'), { dialect: 'postgres' });
export default sequelize;
