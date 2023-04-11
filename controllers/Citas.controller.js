import {
  crearCita,
  actualizarCitas,
  obtenerCitas,
  cancelarCita,
} from "../services/citas";

export const guardarCita = async (req, res) => {
  try {
    const { userNamePaciente, userNamePersonal, fecha, pendiente, idServicio } =
      req.body;
    let cuerpo = {
      userNamePaciente,
      userNamePersonal,
      fecha,
      pendiente,
      idServicio,
    };
    const insertar = await crearCita(cuerpo);
    res.json({ status: "ok", insertar }).status(200);
  } catch (err) {
    res.json({ status: false, msg: "Error con la consulta", err }).status(400);
  }
};

export const buscarCitasPaciente = async (req, res) => {
  try {
    const { userName } = req.params;
    const citas = await obtenerCitas({ userNamePaciente: userName });
    res.json({ status: "ok", citas }).status(200);
  } catch (err) {
    res.json({ status: false, msg: "Error con la consulta", err }).status(400);
  }
};

export const buscarCitasPersonal = async (req, res) => {
  try {
    const { userName } = req.params;
    const citas = await obtenerCitas({ userNamePersonal: userName });
    res.json({ status: "ok", citas }).status(200);
  } catch (err) {
    res.json({ status: false, msg: "Error con la consulta", err }).status(400);
  }
};

export const liberarCita = async (req, res) => {
  try {
    const { idCita } = req.params;
    const { pendiente } = req.body;
    const citas = await actualizarCitas({ pendiente }, idCita);
    res.json({ status: "ok", citas }).status(200);
  } catch (err) {
    res.json({ status: false, msg: "Error con la consulta", err }).status(400);
  }
};

export const cancelarC = async (req, res) => {
  try {
    const { idCita } = req.params;
    const citas = await cancelarCita(idCita);
    res.json({ status: "ok", citas }).status(200);
  } catch (err) {
    res.json({ status: false, msg: "Error con la consulta", err }).status(400);
  }
};
