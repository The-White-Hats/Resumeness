import { Schema, model } from 'mongoose';
import Joi from 'joi';

const resumeSchema = new Schema({
  userID: Schema.Types.ObjectId,
  type: String,
  fileName: String,
  firstName: String,
  lastName: String,
  email: String,
  title: String,
  phone: String,
  address: String,
  linkedInURL: String,
  portfolioURL: String,
  professionalSummary: String,
  skills: [{
    id: Number,
    skill: String
  }],
  experience: [{
    id: Number,
    jobTitle: String,
    company: String,
    startDate: String,
    endDate: String,
    jobDescription: String,
    achievements: [String]
  }],
  education: [{
    id: Number,
    degree: String,
    studyField: String,
    school: String,
    graduationDate: String,
    awards: [String]
  }],
  languages: [{
    id: Number,
    language: String,
    fluency: Number,
  }],
  certifications: [{
    id: Number,
    certification: String,
    date: String,
  }],
  interests: [{
    id: Number,
    interest: String,
  }],
  color: String,
});

const Resume = new model('Resume', resumeSchema);

const ResumeValidation = Joi.object({
  userID: Joi.string().required(),
  type: Joi.string().required(),
  fileName: Joi.string().optional().default("Untitled Resume"),
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  email: Joi.string().email().required(),
  title: Joi.string().required(),
  phone: Joi.string().required(),
  address: Joi.string(),
  linkedInURL: Joi.string().uri().optional().allow(''),
  portfolioURL: Joi.string().uri().optional().allow(''),
  professionalSummary: Joi.string().max(500).required(),
  skills: Joi.array().items(Joi.object({
    id: Joi.number().required(),
    skill: Joi.string().required(),
  })).optional(),
  experience: Joi.array().items(Joi.object({
    id: Joi.number().required(),
    jobTitle: Joi.string().required(),
    company: Joi.string().required(),
    startDate: Joi.string().required(),
    endDate: Joi.string().required(),
    jobDescription: Joi.string().required(),
    achievements: Joi.array().items(Joi.string()),
  })).optional(),
  education: Joi.array().items(Joi.object({
    id: Joi.number().required(),
    degree: Joi.string().required(),
    studyField: Joi.string().required(),
    school: Joi.string().required(),
    graduationDate: Joi.string().required(),
    awards: Joi.array().items(Joi.string()),
  })).optional(),
  languages: Joi.array().items(Joi.object({
    id: Joi.number().required(),
    language: Joi.string().required(),
    fluency: Joi.number().required(),
  })).optional(),
  certifications: Joi.array().items(Joi.object({
    id: Joi.number().required(),
    certification: Joi.string().required(),
    date: Joi.string().required(),
  })).optional(),
  interests: Joi.array().items(Joi.object({
    id: Joi.number().required(),
    interest: Joi.string().required(),
  })).optional(),
  color: Joi.string().required(),
});

export {ResumeValidation, Resume};
