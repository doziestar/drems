import sequelize from '../utils/db';
import { Profile } from './Profile.model';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { DataTypes, Model } from 'sequelize';
export class User extends Model {
    async hashPassword() {
        const salt = await bcrypt.genSalt(10);
        try {
            this.password = await bcrypt.hash(this.password, salt);
        }
        catch (error) {
            throw new Error(error);
        }
    }
    comparePassword(password) {
        return bcrypt.compare(password, this.password);
    }
    async generateToken() {
        try {
            const payload = {
                id: this.id,
                email: this.email,
                phoneNumber: this.phoneNumber,
                isActive: this.isActive,
            };
            const token = await jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });
            return token;
        }
        catch (error) {
            throw new Error(error);
        }
    }
    async createProfile() {
        try {
            await Profile.create({
                userId: this.id,
            });
        }
        catch (error) {
            throw new Error(error);
        }
    }
}
User.init({
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    phoneNumber: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    isActive: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
    },
    firstName: {
        type: DataTypes.STRING,
        // allowNull: false,
    },
    lastName: {
        type: DataTypes.STRING,
        // allowNull: false,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    isVerified: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
    role: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'user',
    },
    fullName: {
        type: DataTypes.VIRTUAL,
        get() {
            return `${this.firstName} ${this.lastName}`;
        },
    },
}, {
    sequelize: sequelize,
    modelName: 'user',
    tableName: 'users',
    timestamps: true,
    paranoid: true,
    hooks: {
        beforeCreate: (user) => user.hashPassword(),
        // create profile
        afterCreate: (user) => user.createProfile(),
    },
});
User.hasOne(Profile, {
    foreignKey: 'userId',
    as: 'profile',
});
Profile.belongsTo(User, {
    foreignKey: 'userId',
    as: 'user',
});
