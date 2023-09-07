import {Router} from "express";
import profileController from "../controllers/profile.controller.js";

const profileRouter = Router();

profileRouter.get("/", profileController.getProfile);
profileRouter.delete("/", profileController.deleteProfile);

export default profileRouter;
