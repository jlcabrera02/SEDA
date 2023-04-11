import { Sequelize, DataTypes } from "sequelize";
import sequelize from "../configuration/dbConecction";

const Buzon = sequelize.define("Buzon", {
  userName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  sugerencia: { type: DataTypes.TEXT, allowNull: false },
  createtime: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
});

export default Buzon;
