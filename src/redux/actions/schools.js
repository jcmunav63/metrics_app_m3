import axios from 'axios';

export const SELECT_SCHOOL = 'SELECT_SCHOOL';
export const CLEAR_SELECTED_SCHOOL = 'CLEAR_SELECTED_SCHOOL';

export const FETCH_SCHOOLS_REQUEST = 'FETCH_SCHOOLS_REQUEST';
export const FETCH_SCHOOLS_SUCCESS = 'FETCH_SCHOOLS_SUCCESS';
export const FETCH_SCHOOLS_FAILURE = 'FETCH_SCHOOLS_FAILURE';

const apiUrl = 'https://data.cityofnewyork.us/resource/s3k6-pzi2.json';
const api = axios.create({
  baseURL: 'https://data.cityofnewyork.us/resource/s3k6-pzi2.json',
});

export const fetchSchools = () => (dispatch) => {
  dispatch({ type: FETCH_SCHOOLS_REQUEST });
  api
    .get(apiUrl)
    .then((response) => {
      dispatch({
        type: FETCH_SCHOOLS_SUCCESS,
        payload: response.data,
      });
    })
    .catch((error) => {
      dispatch({
        type: FETCH_SCHOOLS_FAILURE,
        payload: error,
      });
    });
};

export const selectSchool = (dbn) => ({
  type: SELECT_SCHOOL,
  payload: dbn,
});

export const clearSelectedSchool = () => ({
  type: CLEAR_SELECTED_SCHOOL,
});
