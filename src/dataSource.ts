import { DataSource } from 'typeorm';

export const UdremsData = new DataSource({
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
