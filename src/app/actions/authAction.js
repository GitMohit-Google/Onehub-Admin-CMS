import axios from "axios";

export const login = (
  "auth/login",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `https://cms.testexperience.site/signin?email_id=${email}&password=${password}`
      );
      const data = response.data;
      console.log(data);

      if (data && typeof data === "object") {
        return data;
      } else if (
        typeof data === "string" &&
        (data.includes("does not exist") || data.includes("Incorrect password"))
      ) {
        // Return a rejected action with a custom error message
        return rejectWithValue(
          "Login failed: User does not exist or incorrect password"
        );
      }
    } catch (error) {
      // Return a rejected action with the error message
      return rejectWithValue(error.message);
    }
  }
);
