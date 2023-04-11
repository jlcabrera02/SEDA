import { Sequelize } from "sequelize";
import { config } from "dotenv";
config();

const sequelize = new Sequelize(
  process.env.NAME_DB,
  process.env.USER_DB,
  process.env.PASSWORD_DB,
  {
    host: process.env.HOST_DB,
    dialect: "mysql",
  }
);

sequelize
  .authenticate()
  .then((suc) => console.log("Conexcion exitosa", suc))
  .catch((err) => console.log(err));

export default sequelize;
