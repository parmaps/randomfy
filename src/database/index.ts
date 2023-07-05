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

(async () => {
    try {
      await sequelize.sync({ alter: true });
      console.log('All models were synchronized successfully.');
    } catch (error) {
      console.error('Error synchronizing models:', error);
    }
  })();
  

export default sequelize;