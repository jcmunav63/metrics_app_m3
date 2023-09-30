import { configureStore } from '@reduxjs/toolkit';
import schoolsReducer from './reducers/schools';

const store = configureStore({
  reducer: {
    schools: schoolsReducer,
  },
});

export default store;
