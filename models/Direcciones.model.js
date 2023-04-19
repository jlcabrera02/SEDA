import sequelize from "../configuration/dbConecction";

const Direcciones = sequelize.define("Direcciones", {
  userName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  latitud: { type: DataTypes.STRING, allowNull: true },
  longitud: { type: DataTypes.STRING, allowNull: true },
  predefinido: { type: DataTypes.BOOLEAN, defaultValue: false },
});

export default Direcciones;
