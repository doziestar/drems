import App from '@/app';
import IndexRoute from '@routes/index.route';
import request from 'supertest';

afterAll(async () => {
  await new Promise<void>(resolve => setTimeout(() => resolve(), 500));
});

describe('Testing Index', () => {
  describe('[GET] /', () => {
    it('response statusCode 200', () => {
      const indexRoute = new IndexRoute();
      const app = new App([indexRoute]);

      return request(app.getServer()).get(`${indexRoute.path}`).expect(200);
    });

    it('response body', () => {
      const indexRoute = new IndexRoute();
      const app = new App([indexRoute]);

      return request(app.getServer()).get(`${indexRoute.path}`).expect({
        message: 'Welcome To Briza!',
        author: 'Chidozie C. Okafor',
        version: '1.0.0',
        date: new Date().toLocaleDateString(),
        time: new Date().toLocaleTimeString(),
        email: 'chidosiky2015@gmail.com',
        github: 'github.com/doziestar',
        twitter: 'twitter.com/dozie7',
        linkedin: 'linkedin.com/in/dozie7',
      });
    });
  });
});
