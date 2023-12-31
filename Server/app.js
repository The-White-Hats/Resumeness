import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import authMiddleware from "./middlewares/auth.middleware.js";
import authRouter from "./routers/auth.route.js";

import resumeRouter from "./routers/resume.route.js";
import coverLetterRouter from "./routers/cover-letter.route.js";
import profileRouter from "./routers/profile.route.js";
import cors from "cors";

dotenv.config();
const app = express();

const PORT = process.env.PORT || 8080;
mongoose
  .connect(process.env.DB_URL)
  .then(() => console.log("Database is connected"))
  .catch((err) => {
    if (err) return console.error(err);

  });
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/auth", authRouter);
app.use("/profile", authMiddleware, profileRouter)
app.use("/resume", authMiddleware, resumeRouter);
app.use("/cover-letter", authMiddleware, coverLetterRouter);


app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(PORT, (err) => {
  if (err) return console.error(err);
  console.log(`Server started listening at port ${PORT}`);
});
