import sequelize from '../utils/db';
import { DataTypes, Model } from 'sequelize';
export class Profile extends Model {
}
Profile.init({
    userId: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
    },
    bio: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    website: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    location: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    birthday: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    avatar: {
        type: DataTypes.STRING,
        allowNull: true,
    },
}, {
    sequelize: sequelize,
    modelName: 'profile',
    tableName: 'profiles',
    timestamps: false,
    paranoid: false,
});
