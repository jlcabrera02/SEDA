import { Router } from "express";
const route = Router();

import {
  guardarCategoria,
  buscarCategorias,
  actualizarCat,
  eliminarCat,
} from "../controllers/Categoria.controller";

route.get("/obtener", buscarCategorias);
route.post("/crear", guardarCategoria);
route.put("/actualizar/:idCategoria", actualizarCat);
route.delete("/eliminar/:idCategoria", eliminarCat);

export default route;
