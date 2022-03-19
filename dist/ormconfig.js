'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.config = void 0;
exports.config = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: '918273645dozie',
  database: 'udrems',
  logging: true,
  entities: ['dist/entity/**/*.js'],
  migrations: ['dist/migration/**/*.js'],
  subscribers: ['dist/subscriber/**/*.js'],
  synchronize: true,
  cli: {
    entitiesDir: 'dist/entity',
    migrationsDir: 'dist/migration',
    subscribersDir: 'dist/subscriber',
  },
};
