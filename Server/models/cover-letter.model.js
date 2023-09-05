import { Schema, model } from 'mongoose';
import Joi from 'joi';

const coverLetterSchema = new Schema({
  userID: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
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
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  email: Joi.string().email().required(),
  title: Joi.string().required(),
  phone: Joi.string().required(),
  address: Joi.string(),
  company: Joi.string().required(),
  hiringManager: Joi.string().required(),
  letterDetails: Joi.string().max(2500).required(),
});

export default { CoverLetter, CoverLetterValidation };