import { Schema, model } from 'mongoose';

const resumeSchema = new Schema({
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
  experiences: [{
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

export default Resume;
