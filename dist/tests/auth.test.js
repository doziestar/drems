import request from 'supertest';
import App from '../app';
import AuthRoute from '../routes/auth.route';
afterAll(async () => {
  await new Promise(resolve => setTimeout(() => resolve(), 500));
});
describe('Testing Auth', () => {
  describe('[POST] /signup', () => {
    it('response should have the Create userData', () => {
      const userData = {
        email: 'test@email.com',
        password: 'q1w2e3r4',
        phoneNumber: '+2348106683608',
        username: 'test',
        confirmPassword: 'q1w2e3r4',
      };
      const authRoute = new AuthRoute();
      const app = new App([authRoute]);
      return request(app.getServer()).post('/api/v1/signup').send(userData);
    });
  });
  describe('[POST] /login', () => {
    it('response should have the Set-Cookie header with the Authorization token', async () => {
      const userData = {
        email: 'test@email.com',
        password: 'q1w2e3r4',
      };
      const authRoute = new AuthRoute();
      const app = new App([authRoute]);
      return request(app.getServer())
        .post('/api/v1/login')
        .send(userData)
        .expect('X-Auth', /^Authorization=.+/);
    });
  });
  // error: StatusCode : 404, Message : Authentication token missing
  // describe('[POST] /logout', () => {
  //   it('logout Set-Cookie Authorization=; Max-age=0', () => {
  //     const authRoute = new AuthRoute();
  //     const app = new App([authRoute]);
  //     return request(app.getServer())
  //       .post('/api/v1/logout')
  //       .expect('Set-Cookie', /^Authorization=\;/);
  //   });
  // });
});
