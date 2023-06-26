import { combineReducers } from "redux";
import RegisterModule from "./RegisterModule";
import LoginModule from "./LoginModule";
import write from "./write";

const rootReducer = combineReducers({
  RegisterModule,
  LoginModule,
  write,
});

export default rootReducer;
