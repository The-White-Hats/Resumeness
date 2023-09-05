import {Resume, ResumeValidation} from '../models/resume.model.js';

const ResumeController = {
  create: async (req, res) => {
    const resume = req.body;
    console.log(req.body);
    /*const {error} = ResumeValidation.validate(resume);
    if (error) {
      console.log(error);
      return res.status(400).json(error.details);
    }*/
    const newResume = new Resume(resume);
    try {
      await newResume.save();
      return res.status(201).json(newResume);
    } catch (error) {
      console.log(error);
      return res.status(409).json(error);
    }
  },
  edit: async (req, res) => {
  },
  delete: async (req, res) => {
  }
};

export default ResumeController;