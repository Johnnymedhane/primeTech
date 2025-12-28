import { configureStore } from '@reduxjs/toolkit';
import coursesReducer from './features/courses/coursesSlice';
import projectsReducer from './features/projects/projectsSlice';
import userReducer from './features/user/userSlice';

export const store = configureStore({
  reducer: {
    courses: coursesReducer,
    projects: projectsReducer,
    user: userReducer,
  },
});
