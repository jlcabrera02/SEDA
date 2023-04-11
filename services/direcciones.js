import Direcciones from "../models/Direcciones.model";

export const crearDireccion = async (data) => {
  const crearCategoria = await Direcciones.create(data);
  return crearCategoria;
};

export const obtenerDIrecciones = async (userName) => {
  const obtener = await Direcciones.findAll({ where: { userName } });
  return obtener;
};

export const actualizarDIreccion = async (data, id) => {
  const actualizarDir = await Direcciones.update(data, { where: { id } });
  return actualizarDir;
};

export const eliminarDIreccion = async (id) => {
  const eliminarDireccion = await Direcciones.destroy({ where: { id } });
  return eliminarDireccion;
};
