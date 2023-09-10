import { Router } from "express";
import CoverLetterController from "../controllers/cover-letter.controller.js";

const letterRouter = Router();

letterRouter.post("/create", CoverLetterController.create);
letterRouter.put("/edit/:id", CoverLetterController.edit);
letterRouter.delete("/delete/:id", CoverLetterController.delete);

export default letterRouter;
