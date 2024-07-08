import { Router } from "express";
import { create, getAll, getOne, remove, update } from "./controllers/subjectControllers.js";

const subjectRoutes=Router();

subjectRoutes.route("/").get(getAll).post(create);
subjectRoutes.route("/:id").get(getOne).put(update).delete(remove);

export default subjectRoutes;