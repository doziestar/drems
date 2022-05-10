"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
process.env['NODE_CONFIG_DIR'] = __dirname + '/configs';
const app_1 = (0, tslib_1.__importDefault)(require("./app"));
const auth_route_1 = (0, tslib_1.__importDefault)(require("./routes/auth.route"));
const index_route_1 = (0, tslib_1.__importDefault)(require("./routes/index.route"));
const policy_route_1 = require("./routes/policy.route");
const validateEnv_1 = (0, tslib_1.__importDefault)(require("./utils/validateEnv"));
require("dotenv/config");
(0, validateEnv_1.default)();
const app = new app_1.default([new index_route_1.default(), new auth_route_1.default(), new policy_route_1.PolicyRoutes()]);
app.listen();
/**
Todo:
- Write index test case
- push to heroku
 */
