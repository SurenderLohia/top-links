import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

import api from "../../constants/api";

const initialState = {
  data: {
    items: [],
    topUser: {},
  },
  locationFilter: "",
  searchQuery: "",
  isAuthenticated: true,
};

const tweetsSlice = createSlice({
  name: "tweets",
  initialState,
  reducers: {
    setTweetsData(state, action) {
      const { tweets, topUser } = action.payload;
      state.data.items = tweets;
      state.data.topUser = topUser;
    },
    setLocationFilter(state, action) {
      const { locationFilter } = action.payload;
      state.locationFilter = locationFilter;
    },
    setSearchQuery(state, action) {
      const { searchQuery } = action.payload;
      state.searchQuery = searchQuery;
    },
    setIsAuthenticated(state, action) {
      const { isAuthenticated } = action.payload;
      state.isAuthenticated = isAuthenticated;
    },
  },
});

const {
  setTweetsData,
  setLocationFilter,
  setSearchQuery,
  setIsAuthenticated,
} = tweetsSlice.actions;

const getTweets = () => {
  return async (dispatch) => {
    try {
      console.log("getTweets: ", api.getTweets);
      const response = await axios.get(api.getTweets, {
        withCredentials: true,
      });

      const { tweets, topUser } = response.data;
      console.log("comes here");
      dispatch(setTweetsData({ tweets, topUser }));
      dispatch(setIsAuthenticated({ isAuthenticated: true }));
      return response;
    } catch (err) {
      dispatch(setIsAuthenticated({ isAuthenticated: false }));
      if (err.response) {
        console.log(err.response.data);
      }
      return err.response;
    }
  };
};

export { getTweets, setLocationFilter, setSearchQuery, setIsAuthenticated };

export default tweetsSlice.reducer;
