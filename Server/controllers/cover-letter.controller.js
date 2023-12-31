import {CoverLetter, CoverLetterValidation} from '../models/cover-letter.model.js';

const CoverLetterController = {
  create: async (req, res) => {
    const coverLetter = req.body;
    const {error} = CoverLetterValidation.validate(coverLetter, {abortEarly: false});
    if (error) {
      console.log(error);
      return res.status(400).json(error.details);
    }
    const newCoverLetter = new CoverLetter({...coverLetter, userID: req.user._id, type: "cover-letter"});
    try {
      await newCoverLetter.save();
      return res.status(201).json(newCoverLetter);
    } catch (error) {
      return res.status(409).json(error);
    }
  },
  edit: async (req, res) => {
    const id = req.params.id;
    const newCoverLetter = req.body;
    try {
      let coverLetter = await CoverLetter.findById(id);
      if (!coverLetter) {
        return res.status(404).json({ message: "Cover-Letter not found" });
      }
      console.log(coverLetter);
      if (coverLetter.userID.toString() !== req.user._id.toString()) {
        return res.status(401).json({ message: "This is not your Cover-Letter" });
      }
      await coverLetter.updateOne(newCoverLetter);
      return res.status(201).json({ message: "Cover-Letter is successfully updated", newCoverLetter });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({ error: "An error occurred while updating Cover-Letter. Please try again." });
    }
  },
  delete: async (req, res) => {
    const id = req.params.id;
    try {
      let coverLetter = await CoverLetter.findById(id);
      if (!coverLetter) {
        return res.status(404).json({ message: "Cover-Letter not found" });
      }
      console.log(coverLetter);
      if (coverLetter.userID.toString() !== req.user._id.toString()) {
        return res.status(401).json({ message: "This is not your Cover-Letter" });
      }
      await coverLetter.deleteOne();
      return res.status(201).json({ message: "Cover-Letter is successfully deleted", coverLetter });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({ error: "An error occurred while deleting Cover-Letter. Please try again." });
    }
  }
};

export default CoverLetterController;