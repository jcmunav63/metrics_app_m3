import { configureStore } from '@reduxjs/toolkit';
// import { combineReducers } from 'redux';
import schoolsReducer from './reducers/schools';

// const rootReducer = combineReducers({
//   schools: schoolsReducer,
// });

const store = configureStore({
  reducer: {
    schools: schoolsReducer,
  },
});

export default store;
