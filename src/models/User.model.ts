import { IUser } from '@/interfaces/users.interface';
import { DataTypes, Model, Sequelize } from 'sequelize';

export class User extends Model implements IUser {
  createProfile(): Promise<void> {
    throw new Error('Method not implemented.');
  }
  hashPassword(): Promise<void> {
    throw new Error('Method not implemented.');
  }
  comparePassword(password: string): Promise<boolean> {
    throw new Error('Method not implemented.');
  }
  generateToken(): Promise<string> {
    throw new Error('Method not implemented.');
  }
  public id: string;
  public email: string;
  public phoneNumber: string;
  public isActive: boolean;
  public firstName: string;
  public lastName: string;
  public password: string;
  public isVerified: boolean;
  public role: string;
}

User.init(
  {
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
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
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
  },
  {
    sequelize: new Sequelize(),
    modelName: 'user',
    tableName: 'users',
    timestamps: false,
    hooks: {
      beforeCreate: (user: User) => user.hashPassword(),
    },
  },
);
