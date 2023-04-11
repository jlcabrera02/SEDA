import {
  crearDireccion,
  obtenerDIrecciones,
  actualizarDIreccion,
  eliminarDIreccion,
} from "../services/direcciones";

export const guardarDireccion = async (req, res) => {
  try {
    const { userName, latitud, longitud, predefinido } = req.body;
    let cuerpo = {
      userName,
      latitud,
      longitud,
      predefinido,
    };
    const insertar = await crearDireccion(cuerpo);
    res.json({ status: "ok", insertar }).status(200);
  } catch (err) {
    res.json({ status: false, msg: "Error con la consulta", err }).status(400);
  }
};

export const obtenerDirecciones = async (req, res) => {
  try {
    const { userName } = req.params;
    const direcciones = await obtenerDIrecciones(userName);
    res.json({ status: "ok", direcciones }).status(200);
  } catch (err) {
    res.json({ status: false, msg: "Error con la consulta", err }).status(400);
  }
};

export const actualizarDireccion = async (req, res) => {
  try {
    const { idDireccion } = req.params;
    const { latitud, longitud, predefinido } = req.body;
    let cuerpo = { latitud, longitud, predefinido };
    const direccion = await actualizarDIreccion(cuerpo, idDireccion);
    res.json({ status: "ok", direccion }).status(200);
  } catch (err) {
    res.json({ status: false, msg: "Error con la consulta", err }).status(400);
  }
};

export const eliminarDireccion = async (req, res) => {
  try {
    const { idDireccion } = req.params;
    const direccion = await eliminarDIreccion(idDireccion);
    res.json({ status: "ok", direccion }).status(200);
  } catch (err) {
    res.json({ status: false, msg: "Error con la consulta", err }).status(400);
  }
};
