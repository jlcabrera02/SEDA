import Categoria from "../models/Categorias.models";

export const crearCategoria = async (data) => {
  const crearCategoria = await Categoria.create(data);
  return crearCategoria;
};

export const obtenerCategoria = async () => {
  const obtener = await Categoria.findAll();
  return obtener;
};

export const actualizarCategoria = async (data, id) => {
  const actualizarCat = await Categoria.update(data, { where: { id } });
  return actualizarCat;
};

export const eliminarCategoria = async (id) => {
  const eliminarCategoria = await Categoria.destroy({ where: { id } });
  return eliminarCategoria;
};
