import { Sequelize, DataTypes } from "sequelize";
import sequelize from "../configuration/dbConecction";

const User = sequelize.define("User", {
  userName: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    primaryKey: true,
  },
  name: { type: DataTypes.STRING, allowNull: false },
  apepat: { type: DataTypes.STRING, allowNull: false },
  apemat: { type: DataTypes.STRING, allowNull: false },
  escuelaEgreso: DataTypes.STRING,
  certificados: DataTypes.JSON,
  especialidades: DataTypes.JSON,
  antecedentesClinicos: DataTypes.JSON,
  alergiaMedicamentos: DataTypes.JSON,
  contrasena: { type: DataTypes.STRING, allowNull: false },
  rol: { type: DataTypes.ENUM("paciente", "personal", "administrador") },
});

export default User;
