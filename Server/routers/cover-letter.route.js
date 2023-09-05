import { Router } from "express";
import CoverLetterController from "../controllers/cover-letter.controller";

const letterRouter = Router();

letterRouter.post("/create", CoverLetterController.create);
letterRouter.put("/edit", CoverLetterController.update);
letterRouter.delete("/delete", CoverLetterController.delete);

export default letterRouter;
