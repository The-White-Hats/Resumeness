import Joi from "joi";
import { Schema, model } from "mongoose";
const userSchema = new Schema({
  imageName: {
    type: String,
  },
  image: {
    type: String,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    select: false,
    unique: true,
  },
  gender: {
    type: String,
    required: true,
    enum: ["Male", "Female"],
  },
});

const User = model("User", userSchema);

// Sign up validation schema
const signUpSchema = Joi.object({
  image: Joi.string(),
  name: Joi.string().min(3).max(25).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(8).max(32).required(),
  confirmPassword: Joi.string()
    .valid(Joi.ref("password"))
    .required()
    .messages({ "any.only": "Passwords don't match" }),
  gender: Joi.string().valid("Male", "Female").required(),
});

// Log in validation schema
const logInSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});

export { User, logInSchema, signUpSchema };
