import {Resume, ResumeValidation} from '../models/resume.model.js';

const ResumeController = {
  create: async (req, res) => {
    const resume = req.body;
    const {error} = ResumeValidation(resume);
    if (error) {
      return res.status(400).json(error.details[0].message);
    }
    const newResume = new Resume(resume);
    try {
      await newResume.save();
      return res.status(201).json(newResume);
    } catch (error) {
      return res.status(409).json(error);
    }
  },
  edit: async (req, res) => {
  },
  delete: async (req, res) => {
  }
};

export default ResumeController;