import { Router } from "express";
const route = Router();

import {
  insertarServicio,
  buscarServicios,
  actualizarPrecio,
  actualizarS,
  eliminarS,
  buscarServicioById,
} from "../controllers/Servicios.controller";

route.post("/crear", insertarServicio);
route.put("/precio/:idServicio", actualizarPrecio);
route.put("/actualizar/:idServicio", actualizarS);
route.delete("/eliminar/:idServicio", eliminarS);
route.get("/buscar", buscarServicios);
route.get("/buscar/:idSer", buscarServicioById);

export default route;
