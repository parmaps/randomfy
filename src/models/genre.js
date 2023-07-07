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
    genre: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },    
  },
  { sequelize }
);

module.exports = Genre;
