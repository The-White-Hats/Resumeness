import { updateColor } from "../../slices/colorReducer";
import * as form from "../../slices/formReducer";

export const ResetData = (dispatch:any) => {

  /// All the setters functions I am gonna need
  const SetResumeId = (id: string) => dispatch(form.setResumeId(id));
  const SetCoverLetterId = (id: string) => dispatch(form.setCoverLetterId(id));
  const SetFileName = (title: string) => dispatch(form.setFileName(title));
  const SetImg = (img: string) => dispatch(form.setImg(img));
  const SetUploadImage = (img: string) => dispatch(form.setUploadImage(img));
  const SetImageName = (imageName: string) =>
    dispatch(form.setImageName(imageName));
  const SetFirstName = (fName: string) => dispatch(form.setFirstName(fName));
  const SetLastName = (lName: string) => dispatch(form.setLastName(lName));
  const SetEmail = (email: string) => dispatch(form.setEmail(email));
  const SetTitle = (title: string) => dispatch(form.setTitle(title));
  const SetAddress = (address: string) => dispatch(form.setAddress(address));
  const SetPhone = (phone: string) => dispatch(form.setPhone(phone));
  const SetLinkedInURL = (InURL: string) =>
    dispatch(form.setLinkedInURL(InURL));
  const SetPortfolioURL = (PortURL: string) =>
    dispatch(form.setPortfolioURL(PortURL));
  const SetProfessionalSummary = (PortURL: string) =>
    dispatch(form.setProfessionalSummary(PortURL));
  const SetExperience = (experience: form.experience[]) =>
    dispatch(form.setExperience(experience));
  const SetEducation = (education: form.education[]) =>
    dispatch(form.setEducation(education));
  const SetSkills = (skills: form.skill[]) => dispatch(form.setSkills(skills));
  const SetLanguages = (languages: form.language[]) =>
    dispatch(form.setLanguages(languages));
  const SetCertifications = (certifications: form.certification[]) =>
    dispatch(form.setCertifications(certifications));
  const SetInterests = (interests: form.interest[]) =>
    dispatch(form.setInterests(interests));
  const SetCompany = (company: string) => dispatch(form.setCompany(company));
  const SetHiringManager = (hiringManager: string) =>
    dispatch(form.setHiringManager(hiringManager));
  const SetLetterDetails = (letterDetails: string) =>
    dispatch(form.setLetterDetails(letterDetails));
  const SetColor = (color: string) => dispatch(updateColor(color));

  SetImg("/darkuser.png");
  SetUploadImage("/darkuser.png");
  SetImageName("/darkuser.png");
  SetFileName("Untitled");
  SetResumeId("");
  SetCoverLetterId("");
  SetFirstName("");
  SetLastName("");
  SetEmail("");
  SetTitle("");
  SetPhone("");
  SetAddress("");
  SetLinkedInURL("");
  SetPortfolioURL("");
  SetProfessionalSummary("");
  SetExperience([]);
  SetEducation([]);
  SetSkills([]);
  SetLanguages([]);
  SetCertifications([]);
  SetInterests([]);
  SetCompany("");
  SetHiringManager("");
  SetLetterDetails("");
  SetColor("#224286d6");
};
