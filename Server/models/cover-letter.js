import { Schema, model } from 'mongoose';

const coverLetterSchema = new Schema({
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

export default CoverLetter;