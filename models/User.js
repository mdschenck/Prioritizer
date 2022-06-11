const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class User extends Model {}

User.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      hash: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      votes_remaining: {
        type: DataTypes.INTEGER,
        allowNull: false,
        default: "5"        
      }

    },
    {
      sequelize,
      freezeTableName: true,
      underscored: true,
      modelName: 'user',
    }
  );



  module.exports = User;