process.env['NODE_CONFIG_DIR'] = __dirname + '/configs';

import App from '@/app';
import AuthRoute from '@routes/auth.route';
import IndexRoute from '@routes/index.route';
// import UsersRoute from '@routes/users.route';
import validateEnv from '@utils/validateEnv';
import 'dotenv/config';

validateEnv();

const app = new App([new IndexRoute(), new AuthRoute()]);
//, new UsersRoute(),
app.listen();
