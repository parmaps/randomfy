const { Model, DataTypes } = require("sequelize");
const User = require("./User.js");
const sequelize = require("../database/index");

class Search extends Model {}

Search.init(
  {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    userId: {
      type: DataTypes.INTEGER,
      field: "user_id",
      references: {
        model: User, // This is the column name of the referenced model
        key: "id",
      },
    },
    searchData: {
      type: DataTypes.JSON,
      field: "search_data",
      allowNull: false,
    },
  },
  { sequelize }
);

module.exports = Search;
