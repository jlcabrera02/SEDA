import { Router } from "express";
const route = Router();

import {
  guardarDireccion,
  obtenerDirecciones,
  actualizarDireccion,
  eliminarDireccion,
} from "../controllers/Direcciones.controller";

route.get("/obtener/:userName", obtenerDirecciones);
route.post("/crear", guardarDireccion);
route.put("/actualizar/:idDireccion", actualizarDireccion);
route.delete("/eliminar/:idDireccion", eliminarDireccion);

export default route;
