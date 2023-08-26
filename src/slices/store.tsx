import { configureStore } from '@reduxjs/toolkit';
import  formReducer  from './formReducer';

const store = configureStore({
  reducer: {
    formCollection: formReducer,
  },
});

export default store;