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
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserData(state, action) {
      const {
        name,
        screenName,
        twitterId,
        profileImageUrl,
        access_token_key,
        access_token_secret,
        location,
      } = action.payload;

      state.data = {
        name,
        screenName,
        twitterId,
        profileImageUrl,
        access_token_key,
        access_token_secret,
        location,
      };
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
      dispatch(setUserData(response.data.user));
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
