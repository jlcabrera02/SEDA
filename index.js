import express from "express";
import bodyParser from "body-parser";
import morgan from "morgan";
import routes from "./routes/index";
import { config } from "dotenv";
config();
import sequelize from "./configuration/dbConecction";
import "./models";

const app = express();
const port = process.env.PORT;

app.use(morgan("dev"));

sequelize
  .sync({ alter: true })
  .then(() => console.log("Tablas creadas"))
  .catch((err) => console.log(err));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/api", routes);
app.use("/api", routes);

app.listen(port, () => {
  console.log("Aplicacion funcionando en el puerto ", port);
});
