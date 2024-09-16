import axios from "axios";

export const FETCH_DATA = "FETCH_DATA";
export const DATA_SUCCESS = "DATA_SUCCESS";
export const DATA_FAILURE = "DATA_FAILURE";

export const fetchData = () => {
  return {
    type: FETCH_DATA,
  };
};

export const fetchSuccess = (data) => {
  return {
    type: DATA_SUCCESS,
    payload: data,
  };
};

export const fetchFailure = (err) => {
  return {
    payload: err,
    type: FETCH_DATA,
  };
};

export const fetchDataRequest = () => {
  return (dispatch) => {
    dispatch(fetchData());
    axios
      .get("https://reactnative.dev/movies.json")
      .then((res) => {
        dispatch(fetchSuccess(res.data.movies));
      })
      .catch((err) => {
        dispatch(fetchFailure(err));
      });
  };
};
