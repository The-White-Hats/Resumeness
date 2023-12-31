import { createSlice, PayloadAction, Slice } from "@reduxjs/toolkit";
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
  img: string | ArrayBuffer | null | File;
  uploadImage: string | null;
  ImageName: string | null;
  resumeId: string;
  coverLetterId: string;
  //common
  fileName: string;
  firstName: string;
  lastName: string;
  email: string;
  title: string;
  phone: string;
  address: string;
  //resume
  linkedInURL: string;
  portfolioURL: string;
  professionalSummary: string;
  experience: experience[];
  education: education[];
  skills: skill[];
  languages: language[];
  certifications: certification[];
  interests: interest[];
  //cover letter
  company: string;
  hiringManager: string;
  letterDetails: string;
}

const initialState: FormCollectionState = {
  img: "/darkuser.png",
  uploadImage: "/darkuser.png",
  ImageName: "/darkuser.png",
  fileName: "Untitled",
  resumeId: "",
  coverLetterId: "",
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
  company: "",
  hiringManager: "",
  letterDetails: "",
};
export type FormCollectionKey =
  | "experience"
  | "education"
  | "skills"
  | "languages"
  | "certifications"
  | "interests";

const formCollection: Slice = createSlice({
  name: "formCollection",
  initialState,
  reducers: {
    setImg: (
      state,
      action: PayloadAction<string | ArrayBuffer | null | File>
    ) => {
      state.img = action.payload;
    },
    setUploadImage: (state, action: PayloadAction<string>) => {
      state.uploadImage = action.payload;
    },
    setImageName: (state, action: PayloadAction<string>) => {
      state.ImageName = action.payload;
    },
    setResumeId: (state, action: PayloadAction<string>) => {
      state.resumeId = action.payload;
    },
    setCoverLetterId: (state, action: PayloadAction<string>) => {
      state.coverLetterId = action.payload;
    },
    setFileName: (state, action: PayloadAction<string>) => {
      state.fileName = action.payload;
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
    setCompany: (state, action: PayloadAction<string>) => {
      state.company = action.payload;
    },
    setHiringManager: (state, action: PayloadAction<string>) => {
      state.hiringManager = action.payload;
    },
    setLetterDetails: (state, action: PayloadAction<string>) => {
      state.letterDetails = action.payload;
    },
  },
});
export const selectImg = (state: { formCollection: FormCollectionState }) =>
  state.formCollection.img;
export const selectFileName = (state: {
  formCollection: FormCollectionState;
}) => state.formCollection.fileName;
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
export const selectCompany = (state: { formCollection: FormCollectionState }) =>
  state.formCollection.company;
export const selectHiringManager = (state: {
  formCollection: FormCollectionState;
}) => state.formCollection.hiringManager;
export const selectLetterDetails = (state: {
  formCollection: FormCollectionState;
}) => state.formCollection.letterDetails;
export const selectResumeId = (state: {
  formCollection: FormCollectionState;
}) => state.formCollection.resumeId;
export const selectCoverLetterId = (state: {
  formCollection: FormCollectionState;
}) => state.formCollection.coverLetterId;

export type { certification, education, experience, interest, language, skill };
export const {
  setUploadImage,
  setImageName,
  setResumeId,
  setCoverLetterId,
  setImg,
  setFileName,
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
  setCompany,
  setHiringManager,
  setLetterDetails,
} = formCollection.actions;
export default formCollection.reducer;
