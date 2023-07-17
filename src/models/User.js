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
    spotifyUsername: {
      type: DataTypes.STRING,
      allowNull: false,
      field: "spotify_username",
      unique: true,
    },
    spotifyId: {
      type: DataTypes.STRING,
      allowNull: false,
      field: "spotify_id",
      unique: true,
    },
    email: { type: DataTypes.STRING, allowNull: false, unique: true },
    accessToken: { type: DataTypes.STRING, field: "access_token" },
    refreshToken: { type: DataTypes.STRING, field: "refresh_token" },
  },
  {
    sequelize,
  }
);

module.exports = User;
