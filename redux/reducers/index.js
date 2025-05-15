import { combineReducers } from "redux";
import authReducer from "./authReducer";
import closetReducer from "./closetReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  closet: closetReducer,
});

export default rootReducer;
