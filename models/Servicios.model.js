import { DataTypes } from "sequelize";
import sequelize from "../configuration/dbConecction";

const Servicios = sequelize.define("Servicios", {
  servicio: { type: DataTypes.STRING, allowNull: false },
  costo: { type: DataTypes.DECIMAL(10, 2), allowNull: false },
  serviciosAdicionales: { type: DataTypes.JSON, allowNull: true },
  descripcion: { type: DataTypes.TEXT, allowNull: true },
  figura: { type: DataTypes.STRING, allowNull: true },
  idCategoria: { type: DataTypes.INTEGER, allowNull: false },
});

export default Servicios;
