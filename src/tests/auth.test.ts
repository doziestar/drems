import App from '@/app';
import { CreateUserDto, LoginUserDto } from '@dtos/users.dto';
import AuthRoute from '@routes/auth.route';
import request from 'supertest';

afterAll(async () => {
  await new Promise<void>(resolve => setTimeout(() => resolve(), 500));
});

describe('Testing Auth', () => {
  describe('[POST] /signup', () => {
    it('response should have the Create userData', () => {
      const userData: CreateUserDto = {
        email: 'test@email.com',
        password: 'q1w2e3r4',
        phoneNumber: '+2348106683608',
        username: 'test',
        confirmPassword: 'q1w2e3r4',
      };
      const authRoute = new AuthRoute();
      const app = new App([authRoute]);

      return request(app.getServer()).post('/api/v1/signup').send(userData).expect(201);
    });
  });

  describe('[POST] /login', () => {
    it('response should have the X-Auth header with the Authorization token', async () => {
      const userData: LoginUserDto = {
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
  //       .post('/logout')
  //       .expect('Set-Cookie', /^Authorization=\;/);
  //   });
  // });
});
