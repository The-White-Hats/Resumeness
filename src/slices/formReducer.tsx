import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface experience {
  id: number;
  jobTitle: string;
  company: string;
  startDate: Date;
  endDate: Date;
  jobDescription: string;
  achievements: string;
}

interface education {
  id: number;
  degree: string;
  studyField: string;
  school: string;
  graduationDate: Date;
  awards: string;
}

interface skill {
  id: number;
  skill: string;
}

interface language {
  id: number;
  language: string;
  fluency: string;
}

interface certification {
  id: number;
  certification: string;
  date: Date;
}

interface interest {
  id: number;
  interest: string;
}


interface FormCollectionState {

  name: string;
  email: string;
  title: string;
  phone: string;
  address: string;
  linkedInURL: string;
  portfolioURL: string;
  professionalSummary: string;
  experience: experience[];
  education: education[];
  skills: skill[];
  languages: language[];
  certifications: certification[];
  volunteering: experience[];
  interests: interest[];

}

const initialState: FormCollectionState = {
  name: '3m ibrahim',
  email: '',
  title: '',
  phone: '',
  address: '',
  linkedInURL: '',
  portfolioURL: '',
  professionalSummary: '',
  experience: [],
  education: [],
  skills: [],
  languages: [],
  certifications: [],
  volunteering: [],
  interests: [],
};
export type FormCollectionKey = "experience" | "education" | "skills" | "languages" | "certifications" | "volunteering" | "interests";






const formCollection = createSlice({
  name: 'formCollection',
  initialState,
  reducers: {
    setName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    setEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    setTitle: (state, action: PayloadAction<string>) => {
      state.title = action.payload;
    },
    setAddress: (state, action: PayloadAction<string>) => {
      state.address = action.payload;
    },
    setPhone: (state, action: PayloadAction<string>) => {
      state.phone = action.payload;
    },
    setLinkedInURL: (state, action: PayloadAction<string>) => {
      state.linkedInURL = action.payload;
    },
    setPortfolioURL: (state, action: PayloadAction<string>) => {
      state.portfolioURL = action.payload;
    },
    setProfessionalSummary: (state, action: PayloadAction<string>) => {
      state.professionalSummary = action.payload;
    },
    setExperience: (state, action:PayloadAction<experience[]>) => {
      state.experience = action.payload;
    },
    setEducation: (state, action:PayloadAction<education[]>) => {
      state.education = action.payload;
    },
    setSkills: (state, action:PayloadAction<skill[]>) => {
      state.skills = action.payload;
    },
    setLanguages: (state, action:PayloadAction<language[]>) => {
      state.languages = action.payload;
    },
    setCertifications: (state, action:PayloadAction<certification[]>) => {
      state.certifications = action.payload;
    },
    setVolunteering: (state, action:PayloadAction<experience[]>) => {
      state.volunteering = action.payload;
    },
    setInterests: (state, action:PayloadAction<interest[]>) => {
      state.interests = action.payload;
    },
    


    

  },
});

export const selectName = (state: { formCollection: FormCollectionState }) => state.formCollection.name;
export const selectEmail = (state: { formCollection: FormCollectionState }) => state.formCollection.email;
export const selectTitle = (state: { formCollection: FormCollectionState }) => state.formCollection.title;
export const selectAddress = (state: { formCollection: FormCollectionState }) => state.formCollection.address;
export const selectPhone = (state: { formCollection: FormCollectionState }) => state.formCollection.phone;
export const selectLinkedInURL = (state: { formCollection: FormCollectionState }) => state.formCollection.linkedInURL;
export const selectPortfolioURL = (state: { formCollection: FormCollectionState }) => state.formCollection.portfolioURL;
export const selectProfessionalSummary = (state: { formCollection: FormCollectionState }) => state.formCollection.professionalSummary;
export const selectExperience = (state: { formCollection: FormCollectionState }) => state.formCollection.experience;
export const selectEducation = (state: { formCollection: FormCollectionState }) => state.formCollection.education;
export const selectSkills = (state: { formCollection: FormCollectionState }) => state.formCollection.skills;
export const selectLanguages = (state: { formCollection: FormCollectionState }) => state.formCollection.languages;
export const selectCertifications = (state: { formCollection: FormCollectionState }) => state.formCollection.certifications;
export const selectVolunteering = (state: { formCollection: FormCollectionState }) => state.formCollection.volunteering;
export const selectInterests = (state: { formCollection: FormCollectionState }) => state.formCollection.interests;

export type {experience, education, skill, language, certification, interest};
export const { setName, setEmail, setTitle, setAddress, setPhone, setLinkedInURL, setPortfolioURL, setProfessionalSummary, setExperience, setEducation, setSkills, setLanguages, setCertifications, setVolunteering, setInterests } = formCollection.actions;
export default formCollection.reducer;