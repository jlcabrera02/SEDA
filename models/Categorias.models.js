import { DataTypes } from "sequelize";
import sequelize from "../configuration/dbConecction";

const Categorias = sequelize.define("Categorias", {
  categoria: { type: DataTypes.STRING, allowNull: false },
  figura: { type: DataTypes.STRING, allowNull: true },
});

export default Categorias;
