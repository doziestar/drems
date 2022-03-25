import { DataSource } from 'typeorm';
import * as PostgressConnectionStringParser from 'pg-connection-string';

const connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/udrems';
const connectionOptions = PostgressConnectionStringParser.parse(connectionString);

export const UdremsData = new DataSource({
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
