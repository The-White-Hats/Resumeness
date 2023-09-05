import {Router} from "express";
import ResumeController from "../controllers/resume.controller";

const resumeRouter = Router();

resumeRouter.post("/create", ResumeController.create);
resumeRouter.put("/edit", ResumeController.update);
resumeRouter.delete("/delete", ResumeController.delete);

export default resumeRouter;
