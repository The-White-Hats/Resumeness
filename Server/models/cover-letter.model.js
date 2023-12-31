import { Schema, model } from 'mongoose';
import Joi from 'joi';

const coverLetterSchema = new Schema({
  userID: Schema.Types.ObjectId,
  type: String,
  fileName: String,
  firstName: String,
  lastName: String,
  email: String,
  title: String,
  phone: String,
  address: String,
  company: String,
  hiringManager: String,
  letterDetails: String,
});

const CoverLetter = new model('CoverLetter', coverLetterSchema);

const CoverLetterValidation = Joi.object({
  fileName: Joi.string().optional().default("Untitled Cover Letter"),
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  email: Joi.string().email().required(),
  title: Joi.string().required(),
  phone: Joi.string().required(),
  address: Joi.string().allow('').optional(),
  company: Joi.string().required(),
  hiringManager: Joi.string().required(),
  letterDetails: Joi.string().max(2000).required(),
});

export  { CoverLetterValidation , CoverLetter};