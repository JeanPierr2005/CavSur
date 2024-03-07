import { Router } from "express";
import { authRequired } from "../middlewares/validateToken.js";
import {
    getReferees,
    getReferee,
    createReferee,
    updateReferee,
    deleteReferee,
} from "../controllers/referee.controller.js";
import { validateSchema } from "../middlewares/validator.middleware.js";
import { createRefereeSchema } from "../schemas/referee.schema.js";

const router = Router();

router.get("/referees", authRequired, getReferees); //ver todas las tareas
router.get("/referees/:id", authRequired, getReferee); //ver una sola tarea
router.post(
    "/referees",
    authRequired, //mira si el usuario esta autenticado
    validateSchema(createRefereeSchema), //valida los datos y se crea si esta bien
    createReferee
); //crear una tarea
router.delete("/referee/:id", authRequired, deleteReferee); //eliminar una tarea
router.put("/referee/:id", authRequired, updateReferee); //actualizar una tarea

export default router;
