const User = require("./User.js/index.js");
const Genre = require("./Genre.js/index.js");
const Feature = require("./Feature.js/index.js");
const Search = require("./Search.js/index.js");
const Playlist = require("./Playlist.js/index.js");
const sequelize = require("../database/index");

(async () => {
  try {
    await sequelize.sync({ alter: true });
    console.log("All models were synchronized successfully.");
  } catch (error) {
    console.error("Error synchronizing models:", error);
  }
})();
