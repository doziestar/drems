import { IPolicy } from '@/interfaces/policy.interface';
import sequelize from '@/utils/db';
import { DataTypes, Model } from 'sequelize';
import { User } from './User.model';

export class Policy extends Model implements IPolicy {
  public id: string;
  public amountToEnsure: number;
  public name: string;
  public email: string;
  public inceptionDate: Date;
  public installmentPayment: string;
  public clientId: string;
}

Policy.init(
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    amountToEnsure: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    inceptionDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    installmentPayment: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    insuranceType: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    clientId: {
      type: DataTypes.UUID,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'Policy',
    tableName: 'policies',
    timestamps: true,
    paranoid: true,
  },
);

User.hasMany(Policy, {
  foreignKey: 'clientId',
  as: 'policies',
});

Policy.belongsToMany(User, {
  through: 'user_policy',
  foreignKey: 'policyId',
  otherKey: 'userId',
  as: 'users',
});
