import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import personalImg from "../assets/personal-img.svg";
interface experience {
  id: number;
  jobTitle: string;
  company: string;
  startDate: string;
  endDate: string;
  jobDescription: string;
  achievements: string[];
}

interface education {
  id: number;
  degree: string;
  studyField: string;
  school: string;
  graduationDate: string;
  awards: string[];
}

interface skill {
  id: number;
  skill: string;
}

interface language {
  id: number;
  language: string;
  fluency: number;
}

interface certification {
  id: number;
  certification: string;
  date: string;
}

interface interest {
  id: number;
  interest: string;
}

interface FormCollectionState {
  img: string | ArrayBuffer | null;
  picURL: string;
  firstName: string;
  lastName: string;
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
  interests: interest[];
}

const initialState: FormCollectionState = {
  img: personalImg,
  picURL:
    "https://cdn.shopify.com/s/files/1/2393/5817/products/Despicable-Me-Minion-Face-Boys-Pyjamas-Logo-Web_1400x.jpg?v=1549882040",
  firstName: "",
  lastName: "",
  email: "",
  title: "",
  phone: "",
  address: "",
  linkedInURL: "",
  portfolioURL: "",
  professionalSummary: "",
  experience: [],
  education: [],
  skills: [],
  languages: [],
  certifications: [],
  interests: [],
};
export type FormCollectionKey =
  | "experience"
  | "education"
  | "skills"
  | "languages"
  | "certifications"
  | "interests";

const formCollection = createSlice({
  name: "formCollection",
  initialState,
  reducers: {
    setImg: (state, action: PayloadAction<string | ArrayBuffer | null>) => {
      state.img = action.payload;
    },
    setPicURL: (state, action: PayloadAction<string>) => {
      state.picURL = action.payload;
    },
    setFirstName: (state, action: PayloadAction<string>) => {
      state.firstName = action.payload;
    },
    setLastName: (state, action: PayloadAction<string>) => {
      state.lastName = action.payload;
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
    setExperience: (state, action: PayloadAction<experience[]>) => {
      state.experience = action.payload;
    },
    setEducation: (state, action: PayloadAction<education[]>) => {
      state.education = action.payload;
    },
    setSkills: (state, action: PayloadAction<skill[]>) => {
      state.skills = action.payload;
    },
    setLanguages: (state, action: PayloadAction<language[]>) => {
      state.languages = action.payload;
    },
    setCertifications: (state, action: PayloadAction<certification[]>) => {
      state.certifications = action.payload;
    },
    setInterests: (state, action: PayloadAction<interest[]>) => {
      state.interests = action.payload;
    },
  },
});
export const selectImg = (state: { formCollection: FormCollectionState }) =>
  state.formCollection.img;
export const selectPicURL = (state: { formCollection: FormCollectionState }) =>
  state.formCollection.picURL;
export const selectFirstName = (state: {
  formCollection: FormCollectionState;
}) => state.formCollection.firstName;
export const selectLastName = (state: {
  formCollection: FormCollectionState;
}) => state.formCollection.lastName;
export const selectEmail = (state: { formCollection: FormCollectionState }) =>
  state.formCollection.email;
export const selectTitle = (state: { formCollection: FormCollectionState }) =>
  state.formCollection.title;
export const selectAddress = (state: { formCollection: FormCollectionState }) =>
  state.formCollection.address;
export const selectPhone = (state: { formCollection: FormCollectionState }) =>
  state.formCollection.phone;
export const selectLinkedInURL = (state: {
  formCollection: FormCollectionState;
}) => state.formCollection.linkedInURL;
export const selectPortfolioURL = (state: {
  formCollection: FormCollectionState;
}) => state.formCollection.portfolioURL;
export const selectProfessionalSummary = (state: {
  formCollection: FormCollectionState;
}) => state.formCollection.professionalSummary;
export const selectExperience = (state: {
  formCollection: FormCollectionState;
}) => state.formCollection.experience;
export const selectEducation = (state: {
  formCollection: FormCollectionState;
}) => state.formCollection.education;
export const selectSkills = (state: { formCollection: FormCollectionState }) =>
  state.formCollection.skills;
export const selectLanguages = (state: {
  formCollection: FormCollectionState;
}) => state.formCollection.languages;
export const selectCertifications = (state: {
  formCollection: FormCollectionState;
}) => state.formCollection.certifications;
export const selectInterests = (state: {
  formCollection: FormCollectionState;
}) => state.formCollection.interests;

export type { certification, education, experience, interest, language, skill };
export const {
  setImg,
  setPicURL,
  setFirstName,
  setLastName,
  setEmail,
  setTitle,
  setAddress,
  setPhone,
  setLinkedInURL,
  setPortfolioURL,
  setProfessionalSummary,
  setExperience,
  setEducation,
  setSkills,
  setLanguages,
  setCertifications,
  setInterests,
} = formCollection.actions;
export default formCollection.reducer;
