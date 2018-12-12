import { combineReducers } from "redux";
import filterReducer from "./filterReducer";
import postReducer from "./postReducer";

export default combineReducers({
  posts: postReducer,
  filter: filterReducer
});
