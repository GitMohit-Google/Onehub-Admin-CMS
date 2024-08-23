import axios from "axios";

// Define a simple async function for login
export const login = (email, password) => async (dispatch) => {
  try {
    // Make the API request
    const response = await axios.get(
      `https://cms.testexperience.site/signin?email_id=${email}&password=${password}`
    );
    const data = response.data;
    console.log(data);

    // Check if data is valid
    if (data && typeof data === 'object') {
      // Dispatch a success action with the user data
      dispatch({ type: 'LOGIN_SUCCESS', payload: data });
    } else if (
      typeof data === 'string' &&
      (data.includes('does not exist') || data.includes('Incorrect password'))
    ) {
      // Dispatch a failure action with a custom error message
      dispatch({ type: 'LOGIN_FAILURE', payload: 'Login failed: User does not exist or incorrect password' });
    }
  } catch (error) {
    // Dispatch a failure action with the error message
    dispatch({ type: 'LOGIN_FAILURE', payload: error.message });
  }
};

