const { Model, DataTypes } = require("sequelize");
const sequelize = require("../database/index");

class Genre extends Model {}

Genre.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    genres: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  { sequelize }
);

module.exports = Genre;
