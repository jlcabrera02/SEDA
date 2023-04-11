import { Router } from "express";
const route = Router();

import {
  guardarCita,
  liberarCita,
  cancelarC,
  buscarCitasPaciente,
  buscarCitasPersonal,
} from "../controllers/Citas.controller";

route.get("/paciente/:userName", buscarCitasPaciente);
route.get("/personal/:userName", buscarCitasPersonal);
route.post("/crear", guardarCita);
route.put("/consultado/:idCita", liberarCita);
route.delete("/cancelar/:idCita", cancelarC);

export default route;
