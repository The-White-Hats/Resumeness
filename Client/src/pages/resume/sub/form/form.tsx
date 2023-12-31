import {
  deleteObject,
  getDownloadURL,
  ref,
  uploadBytes,
} from "firebase/storage";
import { useEffect, useRef, useState } from "react";
import type { TypedUseSelectorHook } from "react-redux";
import { useDispatch, useSelector } from "react-redux";
import { v4 } from "uuid";
import { terminal } from "virtual:terminal";
import { storage } from "../../../../firebase";
import * as form from "../../../../slices/formReducer";
import type { RootState } from "../../../../slices/store";
import "./Form.css";
let idCounter = 2;
const Form = () => {
  const dispatch = useDispatch();
  const SetImg = (img: string | ArrayBuffer | null) =>
    dispatch(form.setImg(img));
  const SetUploadImage = (img: string) => dispatch(form.setUploadImage(img));
  const SetImageName = (imageName: string) =>
    dispatch(form.setImageName(imageName));
  const SetResumeId = (id: string) => dispatch(form.setResumeId(id));
  const SetCoverLetterId = (id: string) => dispatch(form.setCoverLetterId(id));
  const SetFileName = (title: string) => dispatch(form.setFileName(title));
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
  const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
  const img = useSelector(form.selectImg);
  const Image = useAppSelector((state) => state.formCollection.uploadImage);
  const ImageName = useAppSelector((state) => state.formCollection.ImageName);
  const currentColor = useAppSelector((state) => state.color.color);
  const resumeId = useSelector(form.selectResumeId);
  const coverLetterId = useSelector(form.selectCoverLetterId);
  const fileName = useSelector(form.selectFileName);
  const firstName = useSelector(form.selectFirstName);
  const lastName = useSelector(form.selectLastName);
  const email = useSelector(form.selectEmail);
  const title = useSelector(form.selectTitle);
  const phone = useSelector(form.selectPhone);
  const address = useSelector(form.selectAddress);
  const linkedInURL = useSelector(form.selectLinkedInURL);
  const portfolioURL = useSelector(form.selectPortfolioURL);
  const professionalSummary = useSelector(form.selectProfessionalSummary);
  const experienceArr = useSelector(form.selectExperience);
  const educationArr = useSelector(form.selectEducation);
  const skillArr = useSelector(form.selectSkills);
  const languageArr = useSelector(form.selectLanguages);
  const certificationArr = useSelector(form.selectCertifications);
  const interestArr = useSelector(form.selectInterests);
  const company = useSelector(form.selectCompany);
  const hiringManager = useSelector(form.selectHiringManager);
  const letterDetails = useSelector(form.selectLetterDetails);
  type setter = (value: string) => void;

  const handleInputChange = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>,
    set: setter
  ) => {
    set(event.target.value);
  };

  const handleExperience = {
    addExperience: () => {
      const newExperience: form.experience = {
        id: idCounter,
        jobTitle: "",
        company: "",
        startDate: "",
        endDate: "",
        jobDescription: "",
        achievements: [],
      };
      idCounter++;
      SetExperience([...experienceArr, newExperience]);
    },
    updateExperience: (
      event:
        | React.ChangeEvent<HTMLInputElement>
        | React.ChangeEvent<HTMLTextAreaElement>,
      index: number,
      property: keyof form.experience,
      secondIndex: number = -1
    ) => {
      const newArray = [...experienceArr];
      let updatedObject = { ...newArray[index] };
      if (secondIndex === -1) {
        updatedObject = {
          ...updatedObject,
          [property]: event.target.value,
        };
      } else {
        const achievements = [...updatedObject.achievements];
        achievements[secondIndex] = event.target.value;
        updatedObject = {
          ...updatedObject,
          achievements: achievements,
        };
      }
      newArray[index] = updatedObject;
      SetExperience(newArray);
    },
    updateAchievement: (index: number, secondIndex: number = -1) => {
      const newArray = [...experienceArr];
      const updatedObject = { ...newArray[index] };
      const achievements = [
        ...updatedObject.achievements.slice(0, secondIndex),
        ...updatedObject.achievements.slice(secondIndex + 1),
      ];
      updatedObject.achievements =
        secondIndex === -1 ? [...updatedObject.achievements, ""] : achievements;
      newArray[index] = updatedObject;
      SetExperience(newArray);
    },
    deleteExperience: (index: number) => {
      const newArray = [
        ...experienceArr.slice(0, index),
        ...experienceArr.slice(index + 1),
      ];
      SetExperience(newArray);
    },
  };
  const handleEducation = {
    addEducation: () => {
      const newEducation: form.education = {
        id: idCounter,
        degree: "",
        studyField: "",
        school: "",
        graduationDate: "",
        awards: [],
      };
      idCounter++;
      SetEducation([...educationArr, newEducation]);
    },
    updateEducation: (
      event:
        | React.ChangeEvent<HTMLInputElement>
        | React.ChangeEvent<HTMLTextAreaElement>,
      index: number,
      property: keyof form.education,
      secondIndex: number = -1
    ) => {
      const newArray = [...educationArr];
      let updatedObject = { ...newArray[index] };
      if (secondIndex === -1) {
        updatedObject = {
          ...updatedObject,
          [property]: event.target.value,
        };
      } else {
        const awards = [...updatedObject.awards];
        awards[secondIndex] = event.target.value;
        updatedObject = {
          ...updatedObject,
          awards: awards,
        };
      }
      newArray[index] = updatedObject;
      SetEducation(newArray);
    },
    updateAward: (index: number, secondIndex: number = -1) => {
      const newArray = [...educationArr];
      const updatedObject = { ...newArray[index] };
      const achievements = [
        ...updatedObject.awards.slice(0, secondIndex),
        ...updatedObject.awards.slice(secondIndex + 1),
      ];
      updatedObject.awards =
        secondIndex === -1 ? [...updatedObject.awards, ""] : achievements;
      newArray[index] = updatedObject;
      SetEducation(newArray);
    },
    deleteEducation: (index: number) => {
      const newArray = [
        ...educationArr.slice(0, index),
        ...educationArr.slice(index + 1),
      ];
      SetEducation(newArray);
    },
  };
  const handleSkill = {
    addSkill: () => {
      const newSkill: form.skill = {
        id: idCounter,
        skill: "",
      };
      idCounter++;
      SetSkills([...skillArr, newSkill]);
    },
    updateSkill: (
      event:
        | React.ChangeEvent<HTMLInputElement>
        | React.ChangeEvent<HTMLTextAreaElement>,
      index: number
    ) => {
      const newArray = [...skillArr];
      let updatedObject = { ...newArray[index] };
      updatedObject = {
        ...updatedObject,
        skill: event.target.value,
      };
      newArray[index] = updatedObject;
      SetSkills(newArray);
    },
    deleteSkill: (index: number) => {
      const newArray = [
        ...skillArr.slice(0, index),
        ...skillArr.slice(index + 1),
      ];
      SetSkills(newArray);
    },
  };
  const handleLanguage = {
    addLanguage: () => {
      const newLanguage: form.language = {
        id: idCounter,
        language: "",
        fluency: 0,
      };
      idCounter++;
      SetLanguages([...languageArr, newLanguage]);
    },
    updateLanguage: (
      event:
        | React.ChangeEvent<HTMLInputElement>
        | React.ChangeEvent<HTMLTextAreaElement>,
      index: number,
      property: keyof form.language
    ) => {
      const newArray = [...languageArr];
      let updatedObject = { ...newArray[index] };
      updatedObject = {
        ...updatedObject,
        [property]: event.target.value,
      };
      newArray[index] = updatedObject;
      SetLanguages(newArray);
    },
    deleteLanguage: (index: number) => {
      const newArray = [
        ...languageArr.slice(0, index),
        ...languageArr.slice(index + 1),
      ];
      SetLanguages(newArray);
    },
  };
  const handleCertification = {
    addCertification: () => {
      const newCertification: form.certification = {
        id: idCounter,
        certification: "",
        date: "",
      };
      idCounter++;
      SetCertifications([...certificationArr, newCertification]);
    },
    updateCertification: (
      event:
        | React.ChangeEvent<HTMLInputElement>
        | React.ChangeEvent<HTMLTextAreaElement>,
      index: number,
      property: keyof form.certification
    ) => {
      const newArray = [...certificationArr];
      let updatedObject = { ...newArray[index] };
      updatedObject = {
        ...updatedObject,
        [property]: event.target.value,
      };
      newArray[index] = updatedObject;
      SetCertifications(newArray);
    },
    deleteCertification: (index: number) => {
      const newArray = [
        ...certificationArr.slice(0, index),
        ...certificationArr.slice(index + 1),
      ];
      SetCertifications(newArray);
    },
  };
  const handleInterest = {
    addInterest: () => {
      const newInterest: form.interest = {
        id: idCounter,
        interest: "",
      };
      idCounter++;
      SetInterests([...interestArr, newInterest]);
    },
    updateInterest: (
      event:
        | React.ChangeEvent<HTMLInputElement>
        | React.ChangeEvent<HTMLTextAreaElement>,
      index: number
    ) => {
      const newArray = [...interestArr];
      let updatedObject = { ...newArray[index] };
      updatedObject = {
        ...updatedObject,
        interest: event.target.value,
      };
      newArray[index] = updatedObject;
      SetInterests(newArray);
    },
    deleteInterest: (index: number) => {
      const newArray = [
        ...interestArr.slice(0, index),
        ...interestArr.slice(index + 1),
      ];
      SetInterests(newArray);
    },
  };
  const trashBin = (
    <svg
      width="448"
      height="512"
      viewBox="0 0 448 512"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64C0 81.7 14.3 96 32 96H416C433.7 96 448 81.7 448 64C448 46.3 433.7 32 416 32H320L312.8 17.7C307.4 6.8 296.3 0 284.2 0H163.8C151.7 0 140.6 6.8 135.2 17.7ZM416 128H32L53.2 467C54.8 492.3 75.8 512 101.1 512H346.9C372.2 512 393.2 492.3 394.8 467L416 128Z"
        fill="black"
      />
    </svg>
  );
  const coverLetterNewFields = (
    <>
      <div className="form-element">
        <label htmlFor="company">Company *</label>
        <input
          id="company"
          type="text"
          value={company}
          onChange={(event) => handleInputChange(event, SetCompany)}
          required
        />
      </div>
      <div className="form-element">
        <label htmlFor="hiringManager">Hiring Manager *</label>
        <input
          id="hiringManager"
          type="text"
          value={hiringManager}
          onChange={(event) => handleInputChange(event, SetHiringManager)}
          required
        />
      </div>
      <div className="form-element big">
        <label htmlFor="letterDetails">Letter Details *</label>
        <textarea
          id="letterDetails"
          maxLength={2000}
          value={letterDetails}
          onChange={(event) => handleInputChange(event, SetLetterDetails)}
          required
        />
      </div>
    </>
  );
  const resumeFields = (
    <>
      <div className="sub-title">Experience</div>
      <button
        type="button"
        onClick={handleExperience.addExperience}
        className="main_add_button"
      >
        Add Experience
      </button>
      <div>
        {experienceArr.map((experience, index) => {
          return (
            <div className="Form" key={experience.id}>
              <button
                type="button"
                onClick={() => handleExperience.deleteExperience(index)}
                className="delete-button"
              >
                {trashBin}
              </button>
              <div className="form-element">
                <label htmlFor="job-title">Job Title *</label>
                <input
                  id="job-title"
                  type="text"
                  defaultValue={experience.jobTitle}
                  onChange={(event) =>
                    handleExperience.updateExperience(
                      event,
                      index,
                      "jobTitle" as keyof form.experience
                    )
                  }
                  required
                />
              </div>
              <div className="form-element">
                <label htmlFor="company">Company *</label>
                <input
                  id="company"
                  type="text"
                  defaultValue={experience.company}
                  required
                  onChange={(event) =>
                    handleExperience.updateExperience(
                      event,
                      index,
                      "company" as keyof form.experience
                    )
                  }
                />
              </div>
              <div className="form-element">
                <label htmlFor="start-date">Start Date *</label>
                <input
                  id="start-date"
                  type="date"
                  defaultValue={experience.startDate}
                  required
                  onChange={(event) =>
                    handleExperience.updateExperience(
                      event,
                      index,
                      "startDate" as keyof form.experience
                    )
                  }
                />
              </div>
              <div className="form-element">
                <label htmlFor="end-date">End Date *</label>
                <input
                  id="end-date"
                  type="date"
                  defaultValue={experience.endDate}
                  required
                  onChange={(event) =>
                    handleExperience.updateExperience(
                      event,
                      index,
                      "endDate" as keyof form.experience
                    )
                  }
                />
              </div>
              <div className="form-element big">
                <label htmlFor="description">Description *</label>
                <textarea
                  id="description"
                  defaultValue={experience.jobDescription}
                  required
                  onChange={(event) =>
                    handleExperience.updateExperience(
                      event,
                      index,
                      "jobDescription" as keyof form.experience
                    )
                  }
                />
              </div>
              <div className="form-element big">
                <label>Achievements</label>
                <button
                  type="button"
                  onClick={() => handleExperience.updateAchievement(index)}
                  className="sub_add_button"
                >
                  Add Achievements
                </button>
                {experience.achievements.map((achievement, secondIndex) => {
                  return (
                    <div
                      key={String(experience.id) + String(secondIndex)}
                      className="form-element sub-form"
                    >
                      <textarea
                        value={achievement}
                        onChange={(event) =>
                          handleExperience.updateExperience(
                            event,
                            index,
                            "achievements" as keyof form.experience,
                            secondIndex
                          )
                        }
                      />
                      <button
                        type="button"
                        onClick={() =>
                          handleExperience.updateAchievement(index, secondIndex)
                        }
                        className="delete-button"
                      >
                        {trashBin}
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
      <div className="sub-title">Education</div>
      <button
        type="button"
        onClick={handleEducation.addEducation}
        className="main_add_button"
      >
        Add Education
      </button>
      <div>
        {educationArr.map((education, index) => {
          return (
            <div className="Form" key={education.id}>
              <button
                type="button"
                onClick={() => handleEducation.deleteEducation(index)}
                className="delete-button"
              >
                {trashBin}
              </button>
              <div className="form-element">
                <label htmlFor="degree">Degree *</label>
                <input
                  id="degree"
                  type="text"
                  defaultValue={education.degree}
                  required
                  onChange={(event) =>
                    handleEducation.updateEducation(
                      event,
                      index,
                      "degree" as keyof form.education
                    )
                  }
                />
              </div>
              <div className="form-element">
                <label htmlFor="study-field">Study Field *</label>
                <input
                  id="study-field"
                  type="text"
                  defaultValue={education.studyField}
                  required
                  onChange={(event) =>
                    handleEducation.updateEducation(
                      event,
                      index,
                      "studyField" as keyof form.education
                    )
                  }
                />
              </div>
              <div className="form-element">
                <label htmlFor="school">School *</label>
                <input
                  id="school"
                  type="text"
                  defaultValue={education.school}
                  required
                  onChange={(event) =>
                    handleEducation.updateEducation(
                      event,
                      index,
                      "school" as keyof form.education
                    )
                  }
                />
              </div>
              <div className="form-element">
                <label htmlFor="grad-date">Graduation Date *</label>
                <input
                  id="grad-date"
                  type="date"
                  defaultValue={education.graduationDate}
                  required
                  onChange={(event) =>
                    handleEducation.updateEducation(
                      event,
                      index,
                      "graduationDate" as keyof form.education
                    )
                  }
                />
              </div>
              <div className="form-element big">
                <label>Awards</label>
                <button
                  type="button"
                  onClick={() => handleEducation.updateAward(index)}
                  className="sub_add_button"
                >
                  Add Awards
                </button>
                {education.awards.map((awards, secondIndex) => {
                  return (
                    <div
                      key={String(education.id) + String(secondIndex)}
                      className="form-element sub-form"
                    >
                      <textarea
                        value={awards}
                        onChange={(event) =>
                          handleEducation.updateEducation(
                            event,
                            index,
                            "awards" as keyof form.education,
                            secondIndex
                          )
                        }
                      />
                      <button
                        type="button"
                        onClick={() =>
                          handleEducation.updateAward(index, secondIndex)
                        }
                        className="delete-button"
                      >
                        {trashBin}
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
      <div className="sub-title">Skills</div>
      <button
        type="button"
        onClick={handleSkill.addSkill}
        className="main_add_button"
      >
        Add Skill
      </button>
      <div>
        {skillArr.map((skill, index) => {
          return (
            <div className="Form" key={skill.id}>
              <button
                type="button"
                onClick={() => handleSkill.deleteSkill(index)}
                className="delete-button"
              >
                {trashBin}
              </button>
              <div className="form-element">
                <label htmlFor="skill">Skill *</label>
                <input
                  id="skill"
                  type="text"
                  defaultValue={skill.skill}
                  onChange={(event) => handleSkill.updateSkill(event, index)}
                  required
                />
              </div>
            </div>
          );
        })}
      </div>
      <div className="sub-title">Interests</div>
      <button
        type="button"
        onClick={handleInterest.addInterest}
        className="main_add_button"
      >
        Add Interest
      </button>
      <div>
        {interestArr.map((interest, index) => {
          return (
            <div className="Form" key={interest.id}>
              <button
                type="button"
                onClick={() => handleInterest.deleteInterest(index)}
                className="delete-button"
              >
                {trashBin}
              </button>
              <div className="form-element">
                <label htmlFor="interest">Interest *</label>
                <input
                  id="interest"
                  type="text"
                  defaultValue={interest.interest}
                  required
                  onChange={(event) =>
                    handleInterest.updateInterest(event, index)
                  }
                />
              </div>
            </div>
          );
        })}
      </div>
      <div className="sub-title">Languages</div>
      <button
        type="button"
        onClick={handleLanguage.addLanguage}
        className="main_add_button"
      >
        Add Language
      </button>
      <div>
        {languageArr.map((language, index) => {
          return (
            <div className="Form" key={language.id}>
              <button
                type="button"
                onClick={() => handleLanguage.deleteLanguage(index)}
                className="delete-button"
              >
                {trashBin}
              </button>
              <div className="form-element">
                <label htmlFor="language">Language *</label>
                <input
                  id="language"
                  type="text"
                  defaultValue={language.language}
                  required
                  onChange={(event) =>
                    handleLanguage.updateLanguage(
                      event,
                      index,
                      "language" as keyof form.language
                    )
                  }
                />
              </div>
              <div className="form-element">
                <label htmlFor="fluency">Fluency *</label>
                <input
                  id="fluency"
                  type="text"
                  defaultValue={language.fluency}
                  required
                  onChange={(event) =>
                    handleLanguage.updateLanguage(
                      event,
                      index,
                      "fluency" as keyof form.language
                    )
                  }
                />
              </div>
            </div>
          );
        })}
      </div>
      <div className="sub-title">Certifications</div>
      <button
        type="button"
        onClick={handleCertification.addCertification}
        className="main_add_button"
      >
        Add Certification
      </button>
      <div>
        {certificationArr.map((certification, index) => {
          return (
            <div className="Form" key={certification.id}>
              <button
                type="button"
                onClick={() => handleCertification.deleteCertification(index)}
                className="delete-button"
              >
                {trashBin}
              </button>
              <div className="form-element">
                <label htmlFor="certification">Certification *</label>
                <input
                  id="certification"
                  type="text"
                  defaultValue={certification.certification}
                  required
                  onChange={(event) =>
                    handleCertification.updateCertification(
                      event,
                      index,
                      "certification" as keyof form.certification
                    )
                  }
                />
              </div>
              <div className="form-element">
                <label htmlFor="date">Date *</label>
                <input
                  id="date"
                  type="date"
                  defaultValue={certification.date}
                  required
                  onChange={(event) =>
                    handleCertification.updateCertification(
                      event,
                      index,
                      "date" as keyof form.certification
                    )
                  }
                />
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
  const resumePersonalInformation = (
    <>
      <div className="form-element">
        <label htmlFor="linkedin-url">LinkedIn URL (if available)</label>
        <input
          id="linkedin-url"
          type="url"
          value={linkedInURL}
          onChange={(event) => handleInputChange(event, SetLinkedInURL)}
        />
      </div>
      <div className="form-element">
        <label htmlFor="portfolio-url">Portfolio URL (if applicable)</label>
        <input
          id="portfolio-url"
          type="url"
          value={portfolioURL}
          onChange={(event) => handleInputChange(event, SetPortfolioURL)}
        />
      </div>
      <div className="form-element big">
        <label htmlFor="professional-summary">Professional Summary *</label>
        <textarea
          value={professionalSummary}
          id="professional-summary"
          maxLength={500}
          onChange={(event) => handleInputChange(event, SetProfessionalSummary)}
          required
        />
      </div>
    </>
  );
  /* ----------------------------------------------UPLOAD IMAGE ------------------------------------------*/
  const [uploadImage, setUploadImage] = useState<File | null>(null); //!the uploaded image in base64 format
  const [save, setSave] = useState(false); //!to know when save operation is activated
  const [uploaded, setUploaded] = useState({ message: "null" }); //! to know if upload operation of image is completed
  const [oldImage, setOldImage] = useState(Image); //! save the old image and image name in case of the save operation has an error or not complete so that i can go back to the last image the user saved
  const [oldImageName, setOldImageName] = useState(ImageName);
  const uploadPhoto = (
    <div className="img-container">
      <div className="img-file-container">
        <div className="img-container">
          <img src={img as string} alt="personal image" className="img" />
        </div>
        <div className="text">Upload photo</div>
        <input
          style={{ color: "red" }}
          type="file"
          className="file"
          onChange={(event) => {
            const reader = new FileReader();
            reader.onload = () => SetImg(reader.result);
            if (event.target.files) {
              reader.readAsDataURL(event.target.files[0]);
              setUploadImage(event.target.files[0]);
            }
          }}
        />
      </div>
    </div>
  );
  const deleteImage = (Image: string, ImageName: string) => {
    if (Image !== "/darkuser.png") {
      const prevImageUrl = "Resume Personal Image/" + ImageName;
      console.log("enter");
      const prevImageRef = ref(storage, prevImageUrl as string); // get the reference from the url
      deleteObject(prevImageRef) // delete the image
        .then(() => {
          console.log("Image deleted successfully");
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };
  const handelUploadImage = () => {
    if (uploadImage) {
      const imageName = uploadImage.name + v4();
      const imageRef = ref(storage, `Resume Personal Image/${imageName}`);
      uploadBytes(imageRef, uploadImage)
        .then(() => {
          console.log("Image uploaded successfully");
          getDownloadURL(imageRef)
            .then((url) => {
              SetUploadImage(url);
              SetImageName(imageName);
            })
            .then(() => {
              setUploaded({message:"true"});
            })
            .catch((error) => {
              console.log(error);
              setUploaded({message:"error"});
            });
        })
        .catch((error) => {
          console.log(error);
          setUploaded({message:"error"});
        });
    } else {
      setUploaded({message:"no uploaded image"});
    }
  };
  useEffect(() => {
    if (uploaded.message!=="null") {
      saveResume();
      setUploaded({message:"null"});
    }
  }, [uploaded]);
  useEffect(() => {
    if (save) {
      handelUploadImage();
      setSave(false);
    }
  }, [save]);
  //  -------------------------------------------------------------------------------------------------------------

  const resumeRef = useRef<HTMLButtonElement>(null);
  const coverLetterRef = useRef<HTMLButtonElement>(null);
  const updateSaveButton = (
    flag: boolean,
    ref: React.RefObject<HTMLButtonElement>
  ) => {
    if (!ref.current) return;
    ref.current.style.backgroundColor = flag ? "green" : "red";
    ref.current.innerHTML = flag ? "Saved" : "Not saved";
    setTimeout(() => {
      if (!ref.current) return;
      ref.current.style.backgroundColor = "#5accff";
      ref.current.innerHTML = "Save";
    }, 3000);
  };
  const saveCoverLetter = async () => {
    const coverLetter = {
      fileName: fileName,
      firstName: firstName,
      lastName: lastName,
      email: email,
      title: title,
      phone: phone,
      address: address,
      company: company,
      hiringManager: hiringManager,
      letterDetails: letterDetails,
    };
    if (coverLetterId == "") {
      try {
        const res = await fetch("http://localhost:8080/cover-letter/create", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          body: JSON.stringify(coverLetter),
        });
        if (!res.ok) {
          throw new Error(`Error saving resume`);
        }
        updateSaveButton(true, coverLetterRef);
        const data = await res.json();
        SetCoverLetterId(data._id.toString());
        terminal.log(data);
      } catch (err) {
        updateSaveButton(false, coverLetterRef);
        terminal.log(err);
      }
    } else {
      try {
        const res = await fetch(
          `http://localhost:8080/cover-letter/edit/${coverLetterId}`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
            body: JSON.stringify(coverLetter),
          }
        );
        if (!res.ok) {
          throw new Error(`Error saving resume`);
        }
        updateSaveButton(true, coverLetterRef);
        const data = await res.json();
        terminal.log(data);
      } catch (err) {
        updateSaveButton(false, coverLetterRef);
        terminal.log(err);
      }
    }
  };

  const saveResume = async (
    url: string = "",
    imageName: string = "",
    take: boolean = false
  ) => {
    console.log(url,imageName,take,ImageName,oldImageName);
    const resume = {
      fileName: fileName,
      image: take ? url : Image,
      imageName: take ? imageName : ImageName,
      firstName: firstName,
      lastName: lastName,
      email: email,
      title: title,
      phone: phone,
      address: address,
      linkedInURL: linkedInURL,
      portfolioURL: portfolioURL,
      professionalSummary: professionalSummary,
      experience: experienceArr,
      education: educationArr,
      skills: skillArr,
      languages: languageArr,
      certifications: certificationArr,
      interests: interestArr,
      color: currentColor,
    };
    if (resumeId == "") {
      try {
        const res = await fetch("http://localhost:8080/resume/create", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          body: JSON.stringify(resume),
        });
        if (!res.ok) {
          throw new Error(`Error saving resume`);
        }
        if (uploaded.message==="true") {
          deleteImage(oldImage as string, oldImageName as string);
          setOldImage(Image);
          setOldImageName(ImageName);
        }
        updateSaveButton(true, resumeRef);
        const data = await res.json();
        SetResumeId(data._id.toString());
        terminal.log(data._id.toString());
      } catch (err) {
        if (uploaded.message==="true") {
          deleteImage(Image as string, ImageName as string);
          SetUploadImage(oldImage as string);
          SetImageName(oldImageName as string);
        }
        updateSaveButton(false, resumeRef);
        terminal.log(err);
      }
    } else {
      try {
        const res = await fetch(
          `http://localhost:8080/resume/edit/${resumeId}`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
            body: JSON.stringify(resume),
          }
        );
        if (!res.ok) {
          throw new Error(`Error saving resume`);
        }

        if (uploaded.message==="true") {
          deleteImage(oldImage as string, oldImageName as string);
          setOldImage(Image);
          setOldImageName(ImageName);
        }
        updateSaveButton(true, resumeRef);
        const data = await res.json();
        terminal.log(data);
      } catch (err) {
        if (uploaded.message==="true") {
          deleteImage(Image as string, ImageName as string);
          SetUploadImage(oldImage as string);
          SetImageName(oldImageName as string);
        }
        updateSaveButton(false, resumeRef);
        terminal.log(err);
      }
    }
  };
  const saveResumeButton = (
    <button
      id="save"
      ref={resumeRef}
      className="resume"
      onClick={(event) => {
        let Valid = false;
        if (myForm.current) {
          Valid = myForm.current.checkValidity();

          if (!Valid) {
            myForm.current.reportValidity();
          } else {
            event.preventDefault();
            console.log("Resume saved");
            setSave(true);
          }
        }
      }}
    >
      Save
    </button>
  );
  const saveCoverLetterButton = (
    <button
      id="save"
      ref={coverLetterRef}
      className="cover-letter"
      onClick={(event) => {
        let Valid = false;
        if (myForm.current) {
          Valid = myForm.current.checkValidity();

          if (!Valid) {
            myForm.current.reportValidity();
          } else {
            event.preventDefault();
            saveCoverLetter();
            terminal.log("Cover Letter saved");
          }
        }
      }}
    >
      Save
    </button>
  );

  const myForm = useRef<HTMLFormElement>(null);
  return (
    <div className="form-wrapper">
      <div className="title">Form</div>
      <form ref={myForm}>
        <div id="file-name-container">
          <input
            id="file-name"
            type="text"
            value={fileName}
            onChange={(event) => handleInputChange(event, SetFileName)}
            required
          />
        </div>
        <div className="sub-title">Personal Information</div>
        {location.pathname === "/resume" && uploadPhoto}
        <div className="Form">
          <div className="form-element">
            <label htmlFor="first-name">First Name *</label>
            <input
              id="first-name"
              type="text"
              value={firstName}
              onChange={(event) => handleInputChange(event, SetFirstName)}
              required
            />
          </div>
          <div className="form-element">
            <label htmlFor="last-name">Last Name *</label>
            <input
              id="last-name"
              type="text"
              value={lastName}
              onChange={(event) => handleInputChange(event, SetLastName)}
              required
            />
          </div>
          <div className="form-element">
            <label htmlFor="email">Email *</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(event) => handleInputChange(event, SetEmail)}
              required
            />
          </div>
          <div className="form-element">
            <label htmlFor="title">Title *</label>
            <input
              id="title"
              type="text"
              value={title}
              onChange={(event) => handleInputChange(event, SetTitle)}
              required
            />
          </div>
          <div className="form-element">
            <label htmlFor="phone-number">Phone Number *</label>
            <input
              id="phone-number"
              type="tel"
              value={phone}
              onChange={(event) => handleInputChange(event, SetPhone)}
              required
            />
          </div>
          <div className="form-element">
            <label htmlFor="address">Address</label>
            <input
              id="address"
              type="text"
              value={address}
              onChange={(event) => handleInputChange(event, SetAddress)}
            />
          </div>
          {location.pathname === "/resume"
            ? resumePersonalInformation
            : coverLetterNewFields}
        </div>
        {location.pathname === "/resume" ? { ...resumeFields } : <></>}
        {location.pathname === "/resume"
          ? saveResumeButton
          : saveCoverLetterButton}
        <hr />
      </form>
    </div>
  );
};

export default Form;
