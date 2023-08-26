import { configureStore } from '@reduxjs/toolkit';
import  formReducer  from './formReducer';

const store = configureStore({
  reducer: {
    formData: formReducer,
  },
});

export default store;