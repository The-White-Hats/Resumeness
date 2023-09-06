import {Resume, ResumeValidation} from '../models/resume.model.js';

const ResumeController = {
  create: async (req, res) => {
    const resume = req.body;
    console.log(req.body);
    const {error} = ResumeValidation.validate(resume);
    if (error) {
      console.log(error);
      return res.status(400).json(error.details);
    }
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
    try {
      const { id } = req.params.id;
      let resume = await Resume.findById(id);
      if (!resume) {
        return res.status(404).json({ message: "Resume not found" });
      }
      await Resume.delete(id);
      res.status(201).json({ message: "Resume is successfully deleted", post });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ error: "An error occurred while deleting Resume. Please try again." });
    }
  }
};

export default ResumeController;