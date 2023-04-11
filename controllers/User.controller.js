import { guardarUser, actualizarUser, buscarUser } from "../services/user";
export const postUser = async (req, res) => {
  try {
    const {
      userName,
      name,
      apepat,
      apemat,
      escuelaEgreso,
      certificados,
      especialidades,
      antecedentesClinicos,
      alegiaMedicamentos,
      contrasena,
      rol,
    } = req.body;

    let cuerpo = {};

    if (rol === "paciente") {
      cuerpo = {
        userName,
        name,
        apepat,
        apemat,
        antecedentesClinicos,
        alegiaMedicamentos,
        contrasena,
        rol,
      };
    }

    if (rol === "personal") {
      cuerpo = {
        userName,
        name,
        apepat,
        apemat,
        escuelaEgreso,
        certificados,
        especialidades,
        contrasena,
        rol,
      };
    }

    if (rol === "administrador") {
      cuerpo = {
        userName,
        name,
        apepat,
        apemat,
        contrasena,
        rol,
      };
    }

    const insertar = await guardarUser(cuerpo);

    res.json({ status: "ok", insertar }).status(200);
  } catch (err) {
    res.json({ status: false, msg: "Error con la consulta", err }).status(400);
  }
};

export const buscarUsuario = async (req, res) => {
  try {
    const { userName, contrasena } = req.body;

    let condicional = { contrasena, userName };

    const user = await buscarUser(condicional);

    res.json({ status: "ok", user }).status(200);
  } catch (err) {
    res.json({ status: false, msg: "Error con la consulta", err }).status(400);
  }
};

export const actualizarUsuario = async (req, res) => {
  try {
    const { name, apepat, apemat, contrasena, contrasenaAntigua, userName } =
      req.body;

    let cuerpo = { name, apepat, apemat, contrasena };
    let condicional = { contrasena: contrasenaAntigua, userName };

    const actualizar = await actualizarUser(cuerpo, condicional);

    res.json({ status: "ok", actualizar }).status(200);
  } catch (err) {
    res.json({ status: false, msg: "Error con la consulta", err }).status(400);
  }
};
