import { Schema, model } from "mongoose";
const imageSchema = new Schema(
  {
    image: String,
  },
  { collection: "ImageDetails" }
);

const Image = model("ImageDetails", imageSchema);

export default Image;
