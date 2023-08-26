import { createSlice, createReducer, createAction, PayloadAction } from '@reduxjs/toolkit';
import exp from 'constants';

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
  name: '',
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




const add = (state: FormCollectionState, action: PayloadAction<any>, newInterface: FormCollectionKey) => { //called whenever the user clicks the add button and id must be assigned on creation
  state[newInterface].push(action.payload);
}

const edit = (state: FormCollectionState, action: PayloadAction<{ id: number; updated: Partial<any> }>, newInterface: FormCollectionKey) => {
  const { id, updated } = action.payload;
  const index = state[newInterface].findIndex(item => item.id === id);
  if (index !== -1) {
    state[newInterface][index] = {
      ...state[newInterface][index],
      ...updated,
    };
  }
}

const deleteItem = (state: FormCollectionState, action: PayloadAction<number>, newInterface: FormCollectionKey) => { //called whenever the user clicks the delete button
  const id = action.payload;
  const index = state[newInterface].findIndex(item => item.id === id);
  if (index !== -1) {
    state[newInterface].splice(index, 1);
  }
}

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

    addExperience: (state, action: PayloadAction<experience>) => { add(state, action, 'experience'); },
    addEducation: (state, action: PayloadAction<education>) => { add(state, action, 'education'); },
    addSkill: (state, action: PayloadAction<skill>) => { add(state, action, 'skills'); },
    addLanguage: (state, action: PayloadAction<language>) => { add(state, action, 'languages'); },
    addCertification: (state, action: PayloadAction<certification>) => { add(state, action, 'certifications'); },
    addVolunteering: (state, action: PayloadAction<experience>) => { add(state, action, 'volunteering'); },
    addInterest: (state, action: PayloadAction<interest>) => { add(state, action, 'interests'); },

    editExperience: (state, action: PayloadAction<{ id: number; updated: Partial<experience> }>) => { edit(state, action, 'experience');},
    editEducation: (state, action: PayloadAction<{ id: number; updated: Partial<education> }>) => { edit(state, action, 'education');},
    editSkill: (state, action: PayloadAction<{ id: number; updated: Partial<skill> }>) => { edit(state, action, 'skills');},
    editLanguage: (state, action: PayloadAction<{ id: number; updated: Partial<language> }>) => { edit(state, action, 'languages');},
    editCertification: (state, action: PayloadAction<{ id: number; updated: Partial<certification> }>) => { edit(state, action, 'certifications');},
    editVolunteering: (state, action: PayloadAction<{ id: number; updated: Partial<experience> }>) => { edit(state, action, 'volunteering');},
    editInterest: (state, action: PayloadAction<{ id: number; updated: Partial<interest> }>) => { edit(state, action, 'interests');},

    deleteExperience: (state, action: PayloadAction<number>) => { deleteItem(state, action, 'experience'); },
    deleteEducation: (state, action: PayloadAction<number>) => { deleteItem(state, action, 'education'); },
    deleteSkill: (state, action: PayloadAction<number>) => { deleteItem(state, action, 'skills'); },
    deleteLanguage: (state, action: PayloadAction<number>) => { deleteItem(state, action, 'languages'); },
    deleteCertification: (state, action: PayloadAction<number>) => { deleteItem(state, action, 'certifications'); },
    deleteVolunteering: (state, action: PayloadAction<number>) => { deleteItem(state, action, 'volunteering'); },
    deleteInterest: (state, action: PayloadAction<number>) => { deleteItem(state, action, 'interests'); },

    

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


export const { setName, setEmail, setTitle, setAddress, setPhone, setLinkedInURL, setPortfolioURL, setProfessionalSummary, addExperience, addEducation, addSkill, addLanguage, addCertification, addVolunteering, addInterest, editExperience, editEducation, editSkill, editLanguage, editCertification, editVolunteering, editInterest, deleteExperience, deleteEducation, deleteSkill, deleteLanguage, deleteCertification, deleteVolunteering, deleteInterest } = formCollection.actions;
export default formCollection.reducer;