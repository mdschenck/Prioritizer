const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Proposal extends Model {}

Proposal.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      proposal: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      vote: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },

    },
    {
      sequelize,
      freezeTableName: true,
      underscored: true,
      modelName: 'proposal',
    }
  );



  module.exports = Proposal;