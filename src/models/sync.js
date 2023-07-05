const User = require("./user.js");
const Genre = require("./genre.js");
const Feature = require("./feature.js");
const sequelize = require("../database/index");

(async () => {
  try {
    await sequelize.sync({ alter: true });
    console.log("All models were synchronized successfully.");
  } catch (error) {
    console.error("Error synchronizing models:", error);
  }
})();
