import './Form.css'
import * as form from '../../../../slices/formReducer'
import { useDispatch, useSelector } from 'react-redux'

const Form = () => {
    const dispatch = useDispatch()
    let idCounter = 2;
    //const SetPicURL = (pic: string) => dispatch(form.setPicURL(pic));
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
    const SetSkills = (skills: form.skill[]) =>
        dispatch(form.setSkills(skills));
    const SetLanguages = (languages: form.language[]) =>
        dispatch(form.setLanguages(languages));
    const SetCertifications = (certifications: form.certification[]) =>
        dispatch(form.setCertifications(certifications));
    const SetVolunteering = (volunteering: form.experience[]) =>
        dispatch(form.setVolunteering(volunteering));
    const SetInterests = (interests: form.interest[]) =>
        dispatch(form.setInterests(interests));

    const experienceArr = useSelector(form.selectExperience);
    const educationArr = useSelector(form.selectEducation);
    const skillArr = useSelector(form.selectSkills);
    const languageArr = useSelector(form.selectLanguages);
    const certificationArr = useSelector(form.selectCertifications);
    const volunteeringArr = useSelector(form.selectVolunteering);
    const interestArr = useSelector(form.selectInterests);

    type setter = (value: string) => void
    type elementArr = form.experience[] | form.education[] | form.skill[] | form.language[] | form.certification[] | form.interest[]

    const handleInputChange = (
        event: React.ChangeEvent<HTMLInputElement>,
        set: setter
    ) => {
        set(event.target.value)
    }
    const handleTextChange = (
        event: React.ChangeEvent<HTMLTextAreaElement>
    ) => {
        SetProfessionalSummary(event.target.value)
    }

    const addExperience = () => {
        const newExperience: form.experience = {
            id: idCounter,
            jobTitle: "",
            company: "",
            startDate: "",
            endDate: "",
            jobDescription: "",
            achievements: []
        };
        idCounter++;
        SetExperience([...experienceArr, newExperience]);
    }
    const addEducation = () => {
        const newEducation: form.education = {
            id: idCounter,
            degree: "",
            studyField: "",
            school: "",
            graduationDate: "",
            awards: []
        };
        idCounter++;
        SetEducation([...educationArr, newEducation]);
    }
    const addSkill = () => {
        const newSkill: form.skill = {
            id: idCounter,
            skill: ""
        };
        idCounter++;
        SetSkills([...skillArr, newSkill]);  
    }
    const addLanguage = () => {
        const newLanguage: form.language = {
            id: idCounter,
            language: "",
            fluency: 0
        };
        idCounter++;
        SetLanguages([...languageArr, newLanguage]);
    }
    const addCertification = () => {
        const newCertification: form.certification = {
            id: idCounter,
            certification: "",
            date: ""
        };
        idCounter++;
        SetCertifications([...certificationArr, newCertification]);
    }
    const addVolunteering = () => {
        const newVolunteering: form.experience = {
            id: idCounter,
            jobTitle: "",
            company: "",
            startDate: "",
            endDate: "",
            jobDescription: "",
            achievements: []
        };
        idCounter++;
        SetVolunteering([...volunteeringArr, newVolunteering]);
    }
    const addInterest = () => {
        const newInterest: form.interest = {
            id: idCounter,
            interest: ""
        };
        idCounter++;
        SetInterests([...interestArr, newInterest]);
    }

    return (
        <div className="form-wrapper">
            <div className="title">Form</div>
            <form>
                <div className="sub-title">Personal Information</div>
                <div className="Form">
                    <div className="form-element">
                        <label>First Name</label>
                        <input
                            type="text"
                            onChange={(event) =>
                                handleInputChange(event, SetFirstName)
                            }
                            required
                        />
                    </div>
                    <div className="form-element">
                        <label>Last Name</label>
                        <input
                            type="text"
                            onChange={(event) =>
                                handleInputChange(event, SetLastName)
                            }
                            required
                        />
                    </div>
                    <div className="form-element">
                        <label>Email</label>
                        <input
                            type="email"
                            onChange={(event) =>
                                handleInputChange(event, SetEmail)
                            }
                            required
                        />
                    </div>
                    <div className="form-element">
                        <label>Title</label>
                        <input
                            type="text"
                            onChange={(event) =>
                                handleInputChange(event, SetTitle)
                            }
                            required
                        />
                    </div>
                    <div className="form-element">
                        <label>Phone Number</label>
                        <input
                            type="tel"
                            onChange={(event) =>
                                handleInputChange(event, SetPhone)
                            }
                            required
                        />
                    </div>
                    <div className="form-element">
                        <label>Address</label>
                        <input
                            type="text"
                            onChange={(event) =>
                                handleInputChange(event, SetAddress)
                            }
                            required
                        />
                    </div>
                    <div className="form-element">
                        <label>LinkedIn URL (if available)</label>
                        <input
                            type="url"
                            onChange={(event) =>
                                handleInputChange(event, SetLinkedInURL)
                            }
                        />
                    </div>
                    <div className="form-element">
                        <label>Portfolio URL (if applicable)</label>
                        <input
                            type="url"
                            onChange={(event) =>
                                handleInputChange(event, SetPortfolioURL)
                            }
                        />
                    </div>
                    <div className="form-element big">
                        <label>Professional Summary</label>
                        <textarea onChange={handleTextChange} />
                    </div>
                </div>
                <form>
                    <label className="sub-title">Experience</label>
                    <div className="Form">
                        <button type="button" onClick={addExperience}>
                            Add Experience
                        </button>
                        <div className="Experience">
                            {experienceArr.map((experience) => {
                                return (
                                    <div key={experience.id}>
                                        <label>Job Title</label>
                                        <input
                                            type="text"
                                            defaultValue={experience.jobTitle}
                                        />
                                        <label>Company</label>
                                        <input
                                            type="text"
                                            defaultValue={experience.company}
                                        />
                                        <label>Start Date</label>
                                        <input
                                            type="date"
                                            defaultValue={experience.startDate}
                                        />
                                        <label>End Date</label>
                                        <input
                                            type="date"
                                            defaultValue={experience.endDate}
                                        />
                                        <label>Description</label>
                                        <textarea
                                            defaultValue={experience.jobDescription}
                                        />
                                        <label>Achievements</label>
                                        <button type="button">Add Achievements</button>
                                            {experience.achievements.map((achievement) => {
                                                return (
                                                    <div className="achievements">
                                                        <label>Achievement</label>
                                                        <textarea
                                                            defaultValue={achievement}
                                                        />
                                                    </div>
                                                )
                                            })}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </form>
            </form>
        </div>
    )
}

export default Form
