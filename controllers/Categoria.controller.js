import {
  crearCategoria,
  obtenerCategoria,
  actualizarCategoria,
  eliminarCategoria,
} from "../services/categoria";

export const guardarCategoria = async (req, res) => {
  try {
    let cuerpo = {
      categoria: req.body.categoria,
    };
    const insertar = await crearCategoria(cuerpo);
    res.json({ status: "ok", insertar }).status(200);
  } catch (err) {
    res.json({ status: false, msg: "Error con la consulta", err }).status(400);
  }
};

export const buscarCategorias = async (req, res) => {
  try {
    const categorias = await obtenerCategoria();
    res.json({ status: "ok", categorias }).status(200);
  } catch (err) {
    res.json({ status: false, msg: "Error con la consulta", err }).status(400);
  }
};

export const actualizarCat = async (req, res) => {
  try {
    const { idCategoria } = req.params;
    const { categoria, figura } = req.body;
    const cuerpo = { categoria, figura };
    const Actcategoria = await actualizarCategoria(cuerpo, idCategoria);
    res.json({ status: "ok", Actcategoria }).status(200);
  } catch (err) {
    res.json({ status: false, msg: "Error con la consulta", err }).status(400);
  }
};

export const eliminarCat = async (req, res) => {
  try {
    const { idCategoria } = req.params;
    const categoria = await eliminarCategoria(idCategoria);
    res.json({ status: "ok", categoria }).status(200);
  } catch (err) {
    res.json({ status: false, msg: "Error con la consulta", err }).status(400);
  }
};
