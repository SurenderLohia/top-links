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
  },
});

const {
  setTweetsData,
  setLocationFilter,
  setSearchQuery,
} = tweetsSlice.actions;

const getTweets = () => {
  return async (dispatch) => {
    try {
      console.log("getTweets: ", api.getTweets);
      const response = await axios.get(api.getTweets, {
        withCredentials: true,
      });

      const { tweets, topUser } = response.data;

      dispatch(setTweetsData({ tweets, topUser }));
      return response;
    } catch (err) {
      if (err.response) {
        console.log(err.response.data);
      }
      return err.response;
    }
  };
};

export { getTweets, setLocationFilter, setSearchQuery };

export default tweetsSlice.reducer;
