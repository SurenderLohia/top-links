import { combineReducers } from "redux";
import userReducer from "../features/user/userSlice";
import tweetsReducer from "../features/tweets/tweetsSlice";

const appReducer = combineReducers({
  user: userReducer,
  tweets: tweetsReducer,
});

const rootReducer = (state, action) => {
  // Clear all data in redux store to initial.
  if (action.type === "DESTROY_SESSION") state = undefined;

  return appReducer(state, action);
};

export default rootReducer;
