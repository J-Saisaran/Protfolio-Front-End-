import { configureStore } from '@reduxjs/toolkit';
import personalInfoReducer from './personalInfoSlice';
import projectsReducer from './projectsSlice';

export const store = configureStore({
  reducer: {
    devtools: false,
    personalInfo: personalInfoReducer,
    projects: projectsReducer,
  },
});
