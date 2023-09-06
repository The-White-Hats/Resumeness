import {CoverLetter, CoverLetterValidation} from '../models/cover-letter.model.js';

const CoverLetterController = {
  create: async (req, res) => {
    const coverLetter = req.body;
    const {error} = CoverLetterValidation.validate(coverLetter);
    if (error) {
      return res.status(400).json(error.details);
    }
    const newCoverLetter = new CoverLetter(coverLetter);
    try {
      await newCoverLetter.save();
      return res.status(201).json(newCoverLetter);
    } catch (error) {
      return res.status(409).json(error);
    }
  },
  edit: async (req, res) => {
  },
  delete: async (req, res) => {
  }
};

export default CoverLetterController;