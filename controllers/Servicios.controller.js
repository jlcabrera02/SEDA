import {
  crearServicio,
  obtenerServicios,
  actualizarServicio,
  eliminarServicio,
} from "../services/servicios";

export const insertarServicio = async (req, res) => {
  try {
    const { servicio, costo, serviciosAdicionales, descripcion, idCategoria } =
      req.body;
    let cuerpo = {
      servicio,
      costo,
      serviciosAdicionales,
      descripcion,
      idCategoria,
    };
    const insertar = await crearServicio(cuerpo);
    res.json({ status: "ok", insertar }).status(200);
  } catch (err) {
    res.json({ status: false, msg: "Error con la consulta", err }).status(400);
  }
};

export const buscarServicios = async (req, res) => {
  try {
    const servicios = await obtenerServicios();
    res.json({ status: "ok", servicios }).status(200);
  } catch (err) {
    res.json({ status: false, msg: "Error con la consulta", err }).status(400);
  }
};

export const actualizarPrecio = async (req, res) => {
  try {
    const { idServicio } = req.params;
    const { costo } = req.body;
    const servicios = await actualizarServicio({ costo }, idServicio);
    res.json({ status: "ok", servicios }).status(200);
  } catch (err) {
    res.json({ status: false, msg: "Error con la consulta", err }).status(400);
  }
};

export const actualizarS = async (req, res) => {
  try {
    const { idServicio } = req.params;
    const { descripcion, servicio, figura, idCategoria } = req.body;
    let cuerpo = { descripcion, servicio, figura, idCategoria };
    const servicios = await actualizarServicio(cuerpo, idServicio);
    res.json({ status: "ok", servicios }).status(200);
  } catch (err) {
    res.json({ status: false, msg: "Error con la consulta", err }).status(400);
  }
};

export const eliminarS = async (req, res) => {
  try {
    const { idServicio } = req.params;
    const servicios = await eliminarServicio(idServicio);
    res.json({ status: "ok", servicios }).status(200);
  } catch (err) {
    res.json({ status: false, msg: "Error con la consulta", err }).status(400);
  }
};
