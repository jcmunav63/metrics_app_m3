import {
  FETCH_SCHOOLS_REQUEST,
  FETCH_SCHOOLS_SUCCESS,
  FETCH_SCHOOLS_FAILURE,
  SELECT_SCHOOL,
  CLEAR_SELECTED_SCHOOL,
} from '../actions/schools';

const initialState = {
  schools: [],
  selectedSchool: null,
  loading: false,
  error: null,
};

const schoolsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SCHOOLS_REQUEST:
      return { ...state, loading: true, error: null };
    case FETCH_SCHOOLS_SUCCESS:
      return { ...state, schools: action.payload, loading: false };
    case FETCH_SCHOOLS_FAILURE:
      return { ...state, loading: false, error: action.payload };
    case SELECT_SCHOOL:
    {
      const selectedSchool = state.schools.find((school) => school.dbn === action.payload);
      return { ...state, selectedSchool };
    }
    case CLEAR_SELECTED_SCHOOL:
      return { ...state, selectedSchool: null };
    default:
      return state;
  }
};

export default schoolsReducer;
