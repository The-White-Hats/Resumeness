import {Router} from "express";
import profileController from "../controllers/profile.controller.js";

const profileRouter = Router();

profileRouter.get("/", profileController.getProfile);

export default profileRouter;
