const { Model, DataTypes } = require("sequelize");
const sequelize = require("../database/index");

class UserStats extends Model {}
// TODO 5/7 pensar que data iria en columna history, en total_searchs y si tendria mas columnas
UserStats.init(
  {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    history: { type: DataTypes.INTEGER },
    total_searchs: { type: DataTypes.INTEGER },
  },
  { sequelize }
);
