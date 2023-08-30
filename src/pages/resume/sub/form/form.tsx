import { useDispatch, useSelector } from 'react-redux'
import personalImg from "../../../../assets/personal-img.svg"
import * as form from '../../../../slices/formReducer'
import './Form.css'
let idCounter = 2
const Form = () => {
    const dispatch = useDispatch()

    const SetImgURL = (imgURL: string) => dispatch(form.setImgURL(imgURL))
    //const SetPicURL = (pic: string) => dispatch(form.setPicURL(pic));
    const SetFirstName = (fName: string) => dispatch(form.setFirstName(fName))
    const SetLastName = (lName: string) => dispatch(form.setLastName(lName))
    const SetEmail = (email: string) => dispatch(form.setEmail(email))
    const SetTitle = (title: string) => dispatch(form.setTitle(title))
    const SetAddress = (address: string) => dispatch(form.setAddress(address))
    const SetPhone = (phone: string) => dispatch(form.setPhone(phone))
    const SetLinkedInURL = (InURL: string) =>
        dispatch(form.setLinkedInURL(InURL))
    const SetPortfolioURL = (PortURL: string) =>
        dispatch(form.setPortfolioURL(PortURL))
    const SetProfessionalSummary = (PortURL: string) =>
        dispatch(form.setProfessionalSummary(PortURL))
    const SetExperience = (experience: form.experience[]) =>
        dispatch(form.setExperience(experience))
    const SetEducation = (education: form.education[]) =>
        dispatch(form.setEducation(education))
    const SetSkills = (skills: form.skill[]) => dispatch(form.setSkills(skills))
    const SetLanguages = (languages: form.language[]) =>
        dispatch(form.setLanguages(languages))
    const SetCertifications = (certifications: form.certification[]) =>
        dispatch(form.setCertifications(certifications))
    const SetInterests = (interests: form.interest[]) =>
        dispatch(form.setInterests(interests))

    const imgURL = useSelector(form.selectImgURL)      
    const experienceArr = useSelector(form.selectExperience)
    const educationArr = useSelector(form.selectEducation)
    const skillArr = useSelector(form.selectSkills)
    const languageArr = useSelector(form.selectLanguages)
    const certificationArr = useSelector(form.selectCertifications)
    const interestArr = useSelector(form.selectInterests)

    type setter = (value: string) => void

    const handleInputChange = (
        event:
            | React.ChangeEvent<HTMLInputElement>
            | React.ChangeEvent<HTMLTextAreaElement>,
        set: setter
    ) => {
        set(event.target.value)
    }

    const handleExperience = {
        addExperience: () => {
            const newExperience: form.experience = {
                id: idCounter,
                jobTitle: '',
                company: '',
                startDate: '',
                endDate: '',
                jobDescription: '',
                achievements: [],
            }
            idCounter++
            SetExperience([...experienceArr, newExperience])
        },
        updateExperience: (
            event:
                | React.ChangeEvent<HTMLInputElement>
                | React.ChangeEvent<HTMLTextAreaElement>,
            index: number,
            property: keyof form.experience,
            secondIndex: number = -1
        ) => {
            const newArray = [...experienceArr]
            let updatedObject = { ...newArray[index] }
            if (secondIndex === -1) {
                updatedObject = {
                    ...updatedObject,
                    [property]: event.target.value,
                }
            } else {
                const achievements = [...updatedObject.achievements]
                achievements[secondIndex] = event.target.value
                updatedObject = {
                    ...updatedObject,
                    achievements: achievements,
                }
            }
            newArray[index] = updatedObject
            SetExperience(newArray)
        },
        updateAchievement: (index: number, secondIndex: number = -1) => {
            const newArray = [...experienceArr]
            const updatedObject = { ...newArray[index] }
            const achievements = [
                ...updatedObject.achievements.slice(0, secondIndex),
                ...updatedObject.achievements.slice(secondIndex + 1),
            ]
            updatedObject.achievements =
                secondIndex === -1
                    ? [...updatedObject.achievements, '']
                    : achievements
            newArray[index] = updatedObject
            SetExperience(newArray)
        },
        deleteExperience: (index: number) => {
            const newArray = [
                ...experienceArr.slice(0, index),
                ...experienceArr.slice(index + 1),
            ]
            SetExperience(newArray)
        }
    }
    const handleEducation = {
        addEducation: () => {
            const newEducation: form.education = {
                id: idCounter,
                degree: '',
                studyField: '',
                school: '',
                graduationDate: '',
                awards: [],
            }
            idCounter++
            SetEducation([...educationArr, newEducation])
        },
        updateEducation: (
            event:
                | React.ChangeEvent<HTMLInputElement>
                | React.ChangeEvent<HTMLTextAreaElement>,
            index: number,
            property: keyof form.education,
            secondIndex: number = -1
        ) => {
            const newArray = [...educationArr]
            let updatedObject = { ...newArray[index] }
            if (secondIndex === -1) {
                updatedObject = {
                    ...updatedObject,
                    [property]: event.target.value,
                }
            } else {
                const awards = [...updatedObject.awards]
                awards[secondIndex] = event.target.value
                updatedObject = {
                    ...updatedObject,
                    awards: awards,
                }
            }
            newArray[index] = updatedObject
            SetEducation(newArray)
        },
        updateAward: (index: number, secondIndex: number = -1) => {
            const newArray = [...educationArr]
            const updatedObject = { ...newArray[index] }
            const achievements = [
                ...updatedObject.awards.slice(0, secondIndex),
                ...updatedObject.awards.slice(secondIndex + 1),
            ]
            updatedObject.awards =
                secondIndex === -1
                    ? [...updatedObject.awards, '']
                    : achievements
            newArray[index] = updatedObject
            SetEducation(newArray)
        },
        deleteEducation: (index: number) => {
            const newArray = [
                ...educationArr.slice(0, index),
                ...educationArr.slice(index + 1),
            ]
            SetEducation(newArray)
        }
    }
    const handleSkill = {
        addSkill: () => {
            const newSkill: form.skill = {
                id: idCounter,
                skill: '',
            }
            idCounter++
            SetSkills([...skillArr, newSkill])
        },
        updateSkill: (
            event:
                | React.ChangeEvent<HTMLInputElement>
                | React.ChangeEvent<HTMLTextAreaElement>,
            index: number,
        ) => {
            const newArray = [...skillArr]
            let updatedObject = { ...newArray[index] }
                updatedObject = {
                    ...updatedObject,
                    skill: event.target.value,
                }
            newArray[index] = updatedObject
            SetSkills(newArray)
        },
        deleteSkill: (index: number) => {
            const newArray = [
                ...skillArr.slice(0, index),
                ...skillArr.slice(index + 1),
            ]
            SetSkills(newArray)
        }
    }
    const handleLnaugage = {
        addLanguage: () => {
            const newLanguage: form.language = {
                id: idCounter,
                language: '',
                fluency: 0,
            }
            idCounter++
            SetLanguages([...languageArr, newLanguage])
        },
        updateLanguage: (
            event:
                | React.ChangeEvent<HTMLInputElement>
                | React.ChangeEvent<HTMLTextAreaElement>,
            property: keyof form.language,
            index: number,
        ) => {
            const newArray = [...languageArr]
            let updatedObject = { ...newArray[index] }
                updatedObject = {
                    ...updatedObject,
                    [property]: event.target.value,
                }
            newArray[index] = updatedObject
            SetLanguages(newArray)
        },
        deleteLanguage: (index: number) => {
            const newArray = [
                ...languageArr.slice(0, index),
                ...languageArr.slice(index + 1),
            ]
            SetLanguages(newArray)
        }
    }
    const handleCertification = {
        addCertification: () => {
            const newCertification: form.certification = {
                id: idCounter,
                certification: '',
                date: '',
            }
            idCounter++
            SetCertifications([...certificationArr, newCertification])
        },
        updateCertification: (
            event:
                | React.ChangeEvent<HTMLInputElement>
                | React.ChangeEvent<HTMLTextAreaElement>,
            property: keyof form.certification,
            index: number,
        ) => {
            const newArray = [...certificationArr]
            let updatedObject = { ...newArray[index] }
                updatedObject = {
                    ...updatedObject,
                    [property]: event.target.value,
                }
            newArray[index] = updatedObject
            SetCertifications(newArray)
        },
        deleteCertification: (index: number) => {
            const newArray = [
                ...certificationArr.slice(0, index),
                ...certificationArr.slice(index + 1),
            ]
            SetCertifications(newArray)
        }
    }
    const handleInterest = {
        addInterest: () => {
            const newInterest: form.interest = {
                id: idCounter,
                interest: '',
            }
            idCounter++
            SetInterests([...interestArr, newInterest])
        },
        updateInterest: (
            event:
                | React.ChangeEvent<HTMLInputElement>
                | React.ChangeEvent<HTMLTextAreaElement>,
            index: number,
        ) => {
            const newArray = [...interestArr]
            let updatedObject = { ...newArray[index] }
                updatedObject = {
                    ...updatedObject,
                    interest: event.target.value,
                }
            newArray[index] = updatedObject
            SetInterests(newArray)
        },
        deleteInterest: (index: number) => {
            const newArray = [
                ...interestArr.slice(0, index),
                ...interestArr.slice(index + 1),
            ]
            SetInterests(newArray)
        }
    }

    return (
        <div className="form-wrapper">
            <div className="title">Form</div>
            <form>
                <div className="sub-title">Personal Information</div>
                <div className='img-file-container'>
                    <div className='img-container'><img src={imgURL} alt="" /></div>
                    <div className='text'>Upload photo</div> 
                    <input type="file" className='file' onChange={(event)=>{SetImgURL(event.target.value)}}/>
                </div>
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
                        <textarea
                            onChange={(event) =>
                                handleInputChange(event, SetProfessionalSummary)
                            }
                        />
                    </div>
                </div>
                <div className="sub-title">Experience</div>
                <button type="button" onClick={handleExperience.addExperience}>
                    Add Experience
                </button>
                <div>
                    {experienceArr.map((experience, index) => {
                        return (
                            <div className="Form" key={experience.id}>
                                <button
                                    type="button"
                                    onClick={() =>
                                        handleExperience.deleteExperience(index)
                                    }
                                >
                                    <img src="/delete.png" alt="delete" />
                                </button>
                                <div className="form-element">
                                    <label>Job Title</label>
                                    <input
                                        type="text"
                                        defaultValue={experience.jobTitle}
                                        onChange={(event) =>
                                            handleExperience.updateExperience(
                                                event,
                                                index,
                                                'jobTitle' as keyof form.experience
                                            )
                                        }
                                    />
                                </div>
                                <div className="form-element">
                                    <label>Company</label>
                                    <input
                                        type="text"
                                        defaultValue={experience.company}
                                        onChange={(event) =>
                                            handleExperience.updateExperience(
                                                event,
                                                index,
                                                'company' as keyof form.experience
                                            )
                                        }
                                    />
                                </div>
                                <div className="form-element">
                                    <label>Start Date</label>
                                    <input
                                        type="date"
                                        defaultValue={experience.startDate}
                                        onChange={(event) =>
                                            handleExperience.updateExperience(
                                                event,
                                                index,
                                                'startDate' as keyof form.experience
                                            )
                                        }
                                    />
                                </div>
                                <div className="form-element">
                                    <label>End Date</label>
                                    <input
                                        type="date"
                                        defaultValue={experience.endDate}
                                        onChange={(event) =>
                                            handleExperience.updateExperience(
                                                event,
                                                index,
                                                'endDate' as keyof form.experience
                                            )
                                        }
                                    />
                                </div>
                                <div className="form-element big">
                                    <label>Description</label>
                                    <textarea
                                        defaultValue={experience.jobDescription}
                                        onChange={(event) =>
                                            handleExperience.updateExperience(
                                                event,
                                                index,
                                                'jobDescription' as keyof form.experience
                                            )
                                        }
                                    />
                                </div>
                                <div className="form-element big">
                                    <label>Achievements</label>
                                    <button
                                        type="button"
                                        onClick={() =>
                                            handleExperience.updateAchievement(
                                                index
                                            )
                                        }
                                    >
                                        Add Achievements
                                    </button>
                                    {experience.achievements.map(
                                        (achievement, secondIndex) => {
                                            return (
                                                <div
                                                    key={
                                                        String(experience.id) +
                                                        String(secondIndex)
                                                    }
                                                    className="form-element sub-form"
                                                >
                                                    <textarea
                                                        value={
                                                            achievement
                                                        }
                                                        onChange={(event) =>
                                                            handleExperience.updateExperience(
                                                                event,
                                                                index,
                                                                'achievements' as keyof form.experience,
                                                                secondIndex
                                                            )
                                                        }
                                                    />
                                                    <button
                                                        type="button"
                                                        onClick={() =>
                                                            handleExperience.updateAchievement(
                                                                index,
                                                                secondIndex
                                                            )
                                                        }
                                                    >
                                                        <img
                                                            src="/delete.png"
                                                            alt="delete"
                                                        />
                                                    </button>
                                                </div>
                                            )
                                        }
                                    )}
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className="sub-title">Education</div>
                <button type="button" onClick={handleEducation.addEducation}>
                    Add Education
                </button>
                <div>
                    {educationArr.map((education, index) => {
                        return (
                            <div className="Form" key={education.id}>
                                <button
                                    type="button"
                                    onClick={() =>
                                        handleEducation.deleteEducation(index)
                                    }
                                >
                                    <img src="/delete.png" alt="delete" />
                                </button>
                                <div className="form-element">
                                    <label>Degree</label>
                                    <input
                                        type="text"
                                        defaultValue={education.degree}
                                        onChange={(event) =>
                                            handleEducation.updateEducation(
                                                event,
                                                index,
                                                'degree' as keyof form.education
                                            )
                                        }
                                    />
                                </div>
                                <div className="form-element">
                                    <label>Study Field</label>
                                    <input
                                        type="text"
                                        defaultValue={education.studyField}
                                        onChange={(event) =>
                                            handleEducation.updateEducation(
                                                event,
                                                index,
                                                'studyField' as keyof form.education
                                            )
                                        }
                                    />
                                </div>
                                <div className="form-element">
                                    <label>School</label>
                                    <input
                                        type="date"
                                        defaultValue={education.school}
                                        onChange={(event) =>
                                            handleEducation.updateEducation(
                                                event,
                                                index,
                                                'school' as keyof form.education
                                            )
                                        }
                                    />
                                </div>
                                <div className="form-element">
                                    <label>Graduation Date</label>
                                    <input
                                        type="date"
                                        defaultValue={education.graduationDate}
                                        onChange={(event) =>
                                            handleEducation.updateEducation(
                                                event,
                                                index,
                                                'graduationDate' as keyof form.education
                                            )
                                        }
                                    />
                                </div>
                                <div className="form-element big">
                                    <label>Awards</label>
                                    <button
                                        type="button"
                                        onClick={() =>
                                            handleEducation.updateAward(
                                                index
                                            )
                                        }
                                    >
                                        Add Awards
                                    </button>
                                    {education.awards.map(
                                        (awards, secondIndex) => {
                                            return (
                                                <div
                                                    key={
                                                        String(education.id) +
                                                        String(secondIndex)
                                                    }
                                                    className="form-element sub-form"
                                                >
                                                    <textarea
                                                        value={
                                                            awards
                                                        }
                                                        onChange={(event) =>
                                                            handleEducation.updateEducation(
                                                                event,
                                                                index,
                                                                'awards' as keyof form.education,
                                                                secondIndex
                                                            )
                                                        }
                                                    />
                                                    <button
                                                        type="button"
                                                        onClick={() =>
                                                            handleEducation.updateAward(
                                                                index,
                                                                secondIndex
                                                            )
                                                        }
                                                    >
                                                        <img
                                                            src="/delete.png"
                                                            alt="delete"
                                                        />
                                                    </button>
                                                </div>
                                            )
                                        }
                                    )}
                                </div>
                            </div>
                        )
                    })}
                </div>
            </form>
        </div>
    )
}

export default Form
