const { DataTypes, Model } = require("sequelize");
const sequelize = require("../database/index");

class User extends Model {}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    spotify_username: { type: DataTypes.STRING, allowNull: false },
    spotify_id: { type: DataTypes.STRING, allowNull: false },
    email: { type: DataTypes.STRING, allowNull: false },
    acess_token: { type: DataTypes.STRING },
    refresh_token: { type: DataTypes.STRING },
  },
  {
    sequelize,
  }
);

module.exports = User;
