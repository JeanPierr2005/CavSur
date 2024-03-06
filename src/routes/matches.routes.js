import { Router } from "express";
import { authRequired } from "../middlewares/validateToken.js";
import {
    getMatches,
    getMatch,
    createMatch,
    updateMatch,
    deleteMatch,
} from "../controllers/matches.controller.js";
import { validateSchema } from "../middlewares/validator.middleware.js";
import { createMatchSchema } from "../schemas/match.schema.js";

const router = Router();

router.get("/matches", authRequired, getMatches); //ver todas las tareas
router.get("/matches/:id", authRequired, getMatch); //ver una sola tarea
router.post(
    "/matches",
    authRequired, //mira si el usuario esta autenticado
    validateSchema(createMatchSchema), //valida los datos y se crea si esta bien
    createMatch
); //crear una tarea
router.delete("/matches/:id", authRequired, deleteMatch); //eliminar una tarea
router.put("/matches/:id", authRequired, updateMatch); //actualizar una tarea

export default router;
