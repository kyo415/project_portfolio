import { Router } from "express";
import {
  getAllProjects,
  getProjectById,
  createProject,
  updateProject,
  deleteProject,
} from "../controllers/projectController.js";
import { validate } from "../middleware/validate.js";
import { projectSchema, projectUpdateSchema } from "../validators/projectValidator.js";

const router = Router();

router.get("/", getAllProjects);
router.get("/:id", getProjectById);
router.post("/", validate(projectSchema), createProject);
router.put("/:id", validate(projectUpdateSchema), updateProject);
router.delete("/:id", deleteProject);

export default router;
