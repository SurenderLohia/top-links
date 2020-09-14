import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

import api from "../../constants/api";

const initialState = {
  data: {
    name: "",
    screenName: "",
    twitterId: "",
    profileImageUrl: "",
    access_token_key: "",
    access_token_secret: "",
    location: "",
  },
  isAuthenticated: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserData(state, action) {
      const { isAuthenticated, userData } = action.payload;
      const {
        name,
        screenName,
        twitterId,
        profileImageUrl,
        access_token_key,
        access_token_secret,
        location,
      } = userData;

      state.data = {
        name,
        screenName,
        twitterId,
        profileImageUrl,
        access_token_key,
        access_token_secret,
        location,
      };

      state.isAuthenticated = isAuthenticated;
    },
    setIsAuthenticated(state, action) {
      const { isAuthenticated } = action.payload;
      state.isAuthenticated = isAuthenticated;
    },
  },
});

const { setUserData } = userSlice.actions;

const getUserData = () => {
  return async (dispatch) => {
    try {
      console.log("getUser: ", api.getUser);
      const response = await axios.get(api.getUser, {
        withCredentials: true,
      });

      console.log(response);
      dispatch(
        setUserData({ userData: response.data.user, isAuthenticated: true })
      );
      return response;
    } catch (err) {
      if (err.response) {
        console.log(err.response.data);
      }
      return err.response;
    }
  };
};

export { getUserData };

export default userSlice.reducer;
