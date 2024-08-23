import axios from "axios";

export const fetchData = (path = "") => async (dispatch) => {
    dispatch({
      type: "FETCH_DATA_REQUEST",
    });
    try {
      const response = await axios.get(
        `https://cms.testexperience.site/pathfinder/${path}`
      );
      dispatch({
        type: "FETCH_DATA_SUCCESS",
        payload: {
          fileList: response.data,
          path: path,
        },
      });
    } catch (err) {
      console.log(err);
      dispatch({
        type: "FETCH_DATA_FAILURE",
        payload: err.message,
      });
    }
  };
  export const fetchFormData = (path) => async (dispatch) => {
    try {
      const response = await axios.get(
        `https://cms.testexperience.site/fetch_keys/${path}`
      );
      console.log(response.data);
      dispatch({
        type: "FETCH_FORM",
        payload: response.data,
      });
    } catch (err) {
      dispatch({
        type: "FETCH_FORM_ERROR",
        payload: err.message,
      });
    }
  };