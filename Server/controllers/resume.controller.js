import { Schema } from 'mongoose';
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
    const id = req.params.id;
    const newResume = req.body;
    try {
      let resume = await Resume.findById(id);
      if (!resume) {
        return res.status(404).json({ message: "Resume not found" });
      }
      console.log(resume);
      if (resume.userID.toString() !== req.user._id.toString()) {
        return res.status(401).json({ message: "This is not your Resume" });
      }
      await resume.updateOne(newResume);
      return res.status(201).json({ message: "Resume is successfully updated", resume });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({ error: "An error occurred while updating Resume. Please try again." });
    }
  },
  delete: async (req, res) => {
    const id = req.params.id;
    try {
      let resume = await Resume.findById(id);
      if (!resume) {
        return res.status(404).json({ message: "Resume not found" });
      }
      console.log(resume);
      if (resume.userID.toString() !== req.user._id.toString()) {
        return res.status(401).json({ message: "This is not your Resume" });
      }
      await resume.deleteOne();
      return res.status(201).json({ message: "Resume is successfully deleted", resume });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({ error: "An error occurred while deleting Resume. Please try again." });
    }
  }
};

export default ResumeController;