import { useRef } from 'react';
import { useDispatch } from "react-redux";

import * as form from "./../../../slices/formReducer";
import { updateColor } from '../../../slices/colorReducer';
import { Download } from '../../resume/sub/download-button/download-button';

const WorkPiece = ({ userWork, setUserWork, work, light, dark, navigate } : { userWork:any, setUserWork:any, work: any, light: string, dark: string, navigate: any }) => {
  const dispatch = useDispatch();
  /// All the setters functions I am gonna need
  const SetResumeId = (id: string) => dispatch(form.setResumeId(id));
  const SetCoverLetterId = (id: string) => dispatch(form.setCoverLetterId(id));
  const SetFileName = (title: string) => dispatch(form.setFileName(title));
  const SetImg = (img: string) => dispatch(form.setImg(img));
  const SetUploadImage = (img: string) => dispatch(form.setUploadImage(img));
  const SetImageName = (imageName: string) => dispatch(form.setImageName(imageName));
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
  /////////////////////////////////////////////////////////////////////////////

  /// Here I handel clicking the options button on a card
  const buttonsCard = useRef<HTMLDivElement>(null); 
  const handleClickingOptions = () => {
    if(buttonsCard.current)
    if(buttonsCard.current.classList.contains('hide')) buttonsCard.current.classList.remove('hide');
    else buttonsCard.current.classList.add('hide');
  }
  const focusOut = () => {
    setTimeout(() => {
      if(buttonsCard.current) buttonsCard.current.classList.add('hide');
    }, 500);
  }
  ///////////////////////////////////////////////////////

  /// Here I handle deleting a piece of work
  const DeletePieceOfWork = async (work : any) => {
    const id = work._id;
    try {
      const response = await fetch(`http://localhost:8080/${work.type}/delete/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}` 
        }
      });
      if(!response.ok) throw new Error(`${response.status}`)
      setUserWork(userWork.filter((work: any)=>work._id !== id));
    } catch (error : any) {
      console.log({status: 'failed deleting a piece of work', error: error.message});
    }
  };
  ///////////////////////////////////////////

  /// These two functions are for filling the cover letter resume info
  // First filling the cover letter infos
  const fillCoverLetterInfo = () => {
    SetFileName(work.fileName);
    SetFirstName(work.firstName);
    SetLastName(work.lastName);
    SetEmail(work.email);
    SetTitle(work.title);
    SetPhone(work.phone);
    SetAddress(work.address);
    SetCompany(work.company);
    SetHiringManager(work.hiringManager);
    SetLetterDetails(work.letterDetails);
    SetCoverLetterId(work._id);
  }
  // Second filling the resume info
  const fillResumeInfo = () => {
    SetFileName(work.fileName);
    SetImg(work.image);
    SetUploadImage(work.image);
    SetImageName(work.imageName);
    SetFirstName(work.firstName);
    SetLastName(work.lastName);
    SetEmail(work.email);
    SetTitle(work.title);
    SetPhone(work.phone);
    SetAddress(work.address);
    SetLinkedInURL(work.linkedInURL);
    SetPortfolioURL(work.portfolioURL);
    SetProfessionalSummary(work.professionalSummary);
    SetExperience(work.experience);
    SetEducation(work.education);
    SetSkills(work.skills);
    SetLanguages(work.languages);
    SetCertifications(work.certifications);
    SetInterests(work.interests);
    SetColor(work.color);
    SetResumeId(work._id);
  }
  // this functions handles filling the info of the work
  const fillInfo = () => {
    if(work.type === 'cover-letter') fillCoverLetterInfo();
    else fillResumeInfo();
  }
  ///////////////////////////////////////////////////////////////

  /// A functions that handles pressing the edit button
  const handleEdit = () => {
    console.log('edit');
    fillInfo();
    navigate(`/${work.type}`);
  }
  ///////////////////////////////////////////////////////////////

  /// A function that handles downloading the work
  const handleDownload = () => {
    fillInfo();
    setTimeout(() => {
      Download(`/${work.type}/preview`);
    }, 200);
    navigate(`/${work.type}/preview`);
  }
  ///////////////////////////////////////////////////////////////

  return (
    <div className="work-card" style={{backgroundColor: light}}>
      <div className="card-info">
        <h2><span>Title:</span> {work.fileName}</h2>
        <p style={{color: dark}}>{work.type}</p>
      </div>
      <button className="options-button" onClick={handleClickingOptions} onBlur={focusOut}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 512" fill={dark}><path d="M64 360a56 56 0 1 0 0 112 56 56 0 1 0 0-112zm0-160a56 56 0 1 0 0 112 56 56 0 1 0 0-112zM120 96A56 56 0 1 0 8 96a56 56 0 1 0 112 0z"/></svg>
      </button>
      <div ref={buttonsCard} className="buttons-card hide" style={{borderColor: dark}}>
        <button className="edit-card" onClick={handleEdit}>Edit</button>
        <button className="edit-card" onClick={handleDownload}>download</button>
        <button className="delete-card" onClick={()=>DeletePieceOfWork(work)}>Delete</button>
      </div>
    </div>
  );
}

export default WorkPiece;