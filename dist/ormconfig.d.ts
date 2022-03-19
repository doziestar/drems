export declare const config: {
    type: string;
    host: string;
    port: number;
    username: string;
    password: string;
    database: string;
    logging: boolean;
    entities: string[];
    migrations: string[];
    subscribers: string[];
    cli: {
        entitiesDir: string;
        migrationsDir: string;
        subscribersDir: string;
    };
};
