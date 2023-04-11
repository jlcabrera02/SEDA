import { Router } from "express";
const route = Router();

import {
  insertarServicio,
  buscarServicios,
  actualizarPrecio,
  actualizarS,
  eliminarS,
} from "../controllers/Servicios.controller";

route.post("/crear", insertarServicio);
route.put("/precio/:idServicio", actualizarPrecio);
route.put("/actualizar/:idServicio", actualizarS);
route.delete("/eliminar/:idServicio", eliminarS);
route.get("/buscar", buscarServicios);

export default route;
