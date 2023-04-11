import Categorias from "../models/Categorias.models";
import Servicios from "../models/Servicios.model";

export const crearServicio = async (data) => {
  const crearServicio = await Servicios.create(data);
  return crearServicio;
};

export const obtenerServicios = async () => {
  const crearServicio = await Servicios.findAll({
    include: { model: Categorias },
  });
  return crearServicio;
};

export const actualizarServicio = async (data, id) => {
  const actualizarInfo = await Servicios.update(data, { where: { id } });
  return actualizarInfo;
};

export const eliminarServicio = async (id) => {
  const eliminarServicio = await Servicios.destroy({ where: { id } });
  return eliminarServicio;
};
