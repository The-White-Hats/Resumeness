import {Router} from "express";
import ResumeController from "../controllers/resume.controller.js";

const resumeRouter = Router();

resumeRouter.post("/create", ResumeController.create);
resumeRouter.put("/edit/:id", ResumeController.edit);
resumeRouter.delete("/delete/:id", ResumeController.delete);

export default resumeRouter;
