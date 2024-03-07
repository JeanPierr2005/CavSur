import { Router } from "express";
import { authRequired } from "../middlewares/validateToken.js";
import {
    getEvents,
    getEvent,
    createEvent,
    updateEvent,
    deleteEvent,
} from "../controllers/events.controller.js";
import { validateSchema } from "../middlewares/validator.middleware.js";
import { createEventSchema } from "../schemas/event.schema.js";

const router = Router();

router.get("/events", authRequired, getEvents); //ver todas las tareas
router.get("/events/:id", authRequired, getEvent); //ver una sola tarea
router.post(
    "/events",
    authRequired, //mira si el usuario esta autenticado
    validateSchema(createEventSchema), //valida los datos y se crea si esta bien
    createEvent
); //crear una tarea
router.delete("/events/:id", authRequired, deleteEvent); //eliminar una tarea
router.put("/events/:id", authRequired, updateEvent); //actualizar una tarea

export default router;