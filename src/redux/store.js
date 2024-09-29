import { configureStore } from '@reduxjs/toolkit';
import personalInfoReducer from './personalInfoSlice';
import projectsReducer from './projectsSlice';

export const store = configureStore({
  reducer: {
    personalInfo: personalInfoReducer,
    projects: projectsReducer,
  },
});
