import Citas from "../models/Citas.model";
import Servicios from "../models/Servicios.model";

export const crearCita = async (data) => {
  const crearCita = await Citas.create(data);
  return crearCita;
};

export const obtenerCitas = async (conditional) => {
  const citas = await Citas.findAll({
    where: conditional,
    include: {
      model: Servicios,
    },
  });
  return citas;
};

export const actualizarCitas = async (data, id) => {
  const actualizarInfo = await Citas.update(data, { where: { id } });
  return actualizarInfo;
};

export const cancelarCita = async (id) => {
  const cancelarCita = await Citas.update(
    { cancelado: true, pendiente: false },
    { where: { id } }
  );
  return cancelarCita;
};
