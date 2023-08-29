import './Form.css'
import * as form from '../../../../slices/formReducer'
import { useDispatch, useSelector } from 'react-redux'

let idCounter = 2
const Form = () => {
    const dispatch = useDispatch()
    
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
    const SetVolunteering = (volunteering: form.experience[]) =>
        dispatch(form.setVolunteering(volunteering))
    const SetInterests = (interests: form.interest[]) =>
        dispatch(form.setInterests(interests))

    const experienceArr = useSelector(form.selectExperience)
    const educationArr = useSelector(form.selectEducation)
    const skillArr = useSelector(form.selectSkills)
    const languageArr = useSelector(form.selectLanguages)
    const certificationArr = useSelector(form.selectCertifications)
    const volunteeringArr = useSelector(form.selectVolunteering)
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
            console.log(idCounter)
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
                    [property]:event.target.value
                }
            }
            else {
                const achievements = [...updatedObject.achievements]
                achievements[secondIndex] = event.target.value
                updatedObject = {
                    ...updatedObject,
                    achievements: achievements
                }
            }
            newArray[index] = updatedObject
            SetExperience(newArray)
        },
        addAchievement: (index: number) => {
            const newAchievement: string = ''
            const newArray = [...experienceArr]
            let updatedObject = { ...newArray[index] }
            updatedObject.achievements = [
                ...updatedObject.achievements,
                newAchievement,
            ]
            newArray[index] = updatedObject
            SetExperience(newArray)
        },
    }
    const addEducation = () => {
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
    }
    const addSkill = () => {
        const newSkill: form.skill = {
            id: idCounter,
            skill: '',
        }
        idCounter++
        SetSkills([...skillArr, newSkill])
    }
    const addLanguage = () => {
        const newLanguage: form.language = {
            id: idCounter,
            language: '',
            fluency: 0,
        }
        idCounter++
        SetLanguages([...languageArr, newLanguage])
    }
    const addCertification = () => {
        const newCertification: form.certification = {
            id: idCounter,
            certification: '',
            date: '',
        }
        idCounter++
        SetCertifications([...certificationArr, newCertification])
    }
    const addVolunteering = () => {
        const newVolunteering: form.experience = {
            id: idCounter,
            jobTitle: '',
            company: '',
            startDate: '',
            endDate: '',
            jobDescription: '',
            achievements: [],
        }
        idCounter++
        SetVolunteering([...volunteeringArr, newVolunteering])
    }
    const addInterest = () => {
        const newInterest: form.interest = {
            id: idCounter,
            interest: '',
        }
        idCounter++
        SetInterests([...interestArr, newInterest])
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
                <div className="Sec-form">
                    {experienceArr.map((experience, index) => {
                        return (
                            <div className="Form" key={experience.id}>
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
                                            handleExperience.addAchievement(
                                                index
                                            )
                                        }
                                    >
                                        Add Achievements
                                    </button>
                                    {
                                        experience.achievements.map(
                                        (achievement, secondIndex) => {
                                            return (
                                                <div key={String(experience.id) + String(secondIndex)} className="form-element achievement">
                                                    <textarea
                                                        defaultValue={
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
