import { DataTypes } from "sequelize";
import sequelize from "../configuration/dbConecction";

const Citas = sequelize.define("Citas", {
  userNamePaciente: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  userNamePersonal: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  fecha: { type: DataTypes.DATE, allowNull: false },
  pendiente: { type: DataTypes.BOOLEAN, defaultValue: true },
  cancelado: { type: DataTypes.BOOLEAN, defaultValue: false },
  idServicio: { type: DataTypes.INTEGER, allowNull: false },
});

export default Citas;
