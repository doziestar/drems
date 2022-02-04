import { Routes } from '@interfaces/routes.interface';
import express from 'express';
declare class App {
    app: express.Application;
    port: string | number;
    env: string;
    constructor(routes: Routes[]);
    listen(): void;
    getServer(): express.Application;
    private initializeMiddlewares;
    private initializeRoutes;
    private initializeSwagger;
    private initializeDatabase;
    private initializeErrorHandling;
}
export default App;
