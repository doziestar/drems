import { plainToClass } from 'class-transformer';
import { validate } from 'class-validator';
import { HttpException } from '../exceptions/HttpException';
const validationMiddleware = (type, value = 'body', skipMissingProperties = false, whitelist = true, forbidNonWhitelisted = true) => {
    console.log(type, value, skipMissingProperties, whitelist, forbidNonWhitelisted);
    return (req, res, next) => {
        validate(plainToClass(type, req[value]), { skipMissingProperties, whitelist, forbidNonWhitelisted }).then((errors) => {
            if (errors.length > 0) {
                const message = errors.map((error) => Object.values(error.constraints)).join(', ');
                next(new HttpException(400, message));
            }
            else {
                next();
            }
        });
    };
};
export default validationMiddleware;
