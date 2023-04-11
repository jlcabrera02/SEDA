import { Router } from "express";
import servicios from "./servicios.route";
import citas from "./citas.route";
import categoria from "./categoria.route";
import direcciones from "./direcciones.route";
const route = Router();

import {
  postUser,
  buscarUsuario,
  actualizarUsuario,
} from "../controllers/User.controller";

route.use("/servicios", servicios);
route.use("/categorias", categoria);
route.use("/direcciones", direcciones);
route.use("/citas", citas);
route.put("/usuario/actualizar", actualizarUsuario);
route.post("/usuario/create", postUser);
route.post("/login", buscarUsuario);

export default route;
