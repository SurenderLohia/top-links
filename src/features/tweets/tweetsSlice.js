import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

import api from "../../constants/api";

const initialState = {
  items: [],
  locationFilter: "",
  searchQuery: "",
};

const tweetsSlice = createSlice({
  name: "tweets",
  initialState,
  reducers: {
    setTweetItems(state, action) {
      const { tweets } = action.payload;
      state.items = tweets;
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
  setTweetItems,
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

      dispatch(setTweetItems({ tweets: response.data }));
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
