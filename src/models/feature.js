const { DataTypes, Model } = require("sequelize");
const sequelize = require("../database/index");

class Feature extends Model {}

Feature.init(
  {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    feature: { type: DataTypes.STRING, allowNull: false },
    description: { type: DataTypes.TEXT },
  },
  { sequelize }
);

module.exports = Feature;