import { DataTypes, Sequelize } from 'sequelize/types';

const sequelize = new Sequelize();
const User = sequelize.define(
  'User',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // createdAt: {
    //   type: DataTypes.DATE,
    //   allowNull: false,
    // },
    // updatedAt: {
    //   type: DataTypes.DATE,
    //   allowNull: false,
    // },
    deletedAt: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  },
  {
    timestamps: true,
    paranoid: true,
    freezeTableName: true,
    tableName: 'users',
    hooks: {
      beforeCreate: user => {
        user.createdAt = new Date();
        user.updatedAt = new Date();
      },
      beforeUpdate: user => {
        user.updatedAt = new Date();
      },
    },
  },
);
