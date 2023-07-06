const { Model, DataTypes } = require("sequelize");
const User = require("./user.js");
const sequelize = require("../database/index");

class Playlist extends Model {}

Playlist.init(
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
    playlistData: {
      type: DataTypes.JSON,
      field: "playlist_data",
      allowNull: false,
    },
  },
  { sequelize }
);

module.exports = Playlist;
