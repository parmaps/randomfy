const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("randomfy", "mapi", "Merengue1", {
  host: "localhost",
  dialect: "postgres",
});

(async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
})();

export default sequelize;