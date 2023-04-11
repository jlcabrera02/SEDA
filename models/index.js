import Buzon from "./Buzon.model";
import Categorias from "./Categorias.models";
import Servicios from "./Servicios.model";
import Citas from "./Citas.model";
import Direcciones from "./Direcciones.model";
import User from "./User.model";

/*LLaves foreaneas*/

Citas.belongsTo(Servicios, { foreignKey: "idServicio" });
Servicios.hasMany(Citas, { foreignKey: "idServicio" });

Servicios.belongsTo(Categorias, { foreignKey: "idCategoria" });
Categorias.hasMany(Servicios, { foreignKey: "idCategoria" });

Citas.belongsTo(User, { foreignKey: "userNamePaciente" });
Citas.belongsTo(User, { foreignKey: "userNamePersonal" });
User.hasMany(Citas, { foreignKey: "userNamePaciente" });
User.hasMany(Citas, { foreignKey: "userNamePersonal" });

Direcciones.belongsTo(User, { foreignKey: "userName" });
User.hasMany(Citas, { foreignKey: "userName" });

export default {
  Buzon,
  Categorias,
  Direcciones,
  Servicios,
  User,
  Citas,
};
