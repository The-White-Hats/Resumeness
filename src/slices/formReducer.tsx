import { createSlice, createReducer, createAction, PayloadAction } from '@reduxjs/toolkit';

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
type FormCollectionKey = "experience" | "education" | "skills" | "languages" | "certifications" | "volunteering" | "interests";




const add = (state: FormCollectionState, action: PayloadAction<any>, newInterface: FormCollectionKey) => { //called whenever the user clicks the add button and id must be assigned on creation
  state[newInterface].push(action.payload);
}

/*const edit = (state: FormCollectionState, action: PayloadAction<{ id: number; updatedExperience: Partial<FormCollectionKey> }>) => {
  const { id, updatedExperience } = action.payload;
  const experienceIndex = state.experience.findIndex(item => item.id === id);
  if (experienceIndex !== -1) {
    state.experience[experienceIndex] = {
      ...state.experience[experienceIndex],
      ...updatedExperience,
    };
  }
}*/

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
    //use the add function to add new experience, education, skill, language, certification, volunteering, interest
    addExperience: (state, action: PayloadAction<experience>) => { add(state, action, 'experience'); },
    addEducation: (state, action: PayloadAction<education>) => { add(state, action, 'education'); },
    addSkill: (state, action: PayloadAction<skill>) => { add(state, action, 'skills'); },
    addLanguage: (state, action: PayloadAction<language>) => { add(state, action, 'languages'); },
    addCertification: (state, action: PayloadAction<certification>) => { add(state, action, 'certifications'); },
    addVolunteering: (state, action: PayloadAction<experience>) => { add(state, action, 'volunteering'); },
    addInterest: (state, action: PayloadAction<interest>) => { add(state, action, 'interests'); },

    editExperience: (state, action: PayloadAction<{ id: number; updatedExperience: Partial<experience> }>) => {
      const { id, updatedExperience } = action.payload;
      const experienceIndex = state.experience.findIndex(item => item.id === id);
      if (experienceIndex !== -1) {
        state.experience[experienceIndex] = {
          ...state.experience[experienceIndex],
          ...updatedExperience,
        };
      }
    },
    deleteExperience: (state, action: PayloadAction<number>) => { //called whenever the user clicks the delete button
      const id = action.payload;
      const experienceIndex = state.experience.findIndex(item => item.id === id);
      if (experienceIndex !== -1) {
        state.experience.splice(experienceIndex, 1);
      }
    },
    editEducation: ( //called whenever the user change the value of any field in the education form
      state,
      action: PayloadAction<{ id: number; updatedEducation: Partial<education> }>
    ) => {
      const { id, updatedEducation } = action.payload;
      const educationIndex = state.education.findIndex(item => item.id === id);
      if (educationIndex !== -1) {
        state.education[educationIndex] = {
          ...state.education[educationIndex],
          ...updatedEducation,
        };
      }
    },

  },
});

export const selectName = (state: { formCollection: FormCollectionState }) =>
  state.formCollection.name;
export const selectEmail = (state: { formCollection: FormCollectionState }) =>
  state.formCollection.email;

export const { setName, setEmail } = formCollection.actions;
export default formCollection.reducer;