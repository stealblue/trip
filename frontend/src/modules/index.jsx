import { combineReducers } from "redux";
import RegisterMod from "./RegisterMod";
import LoginMod from "./LoginMod";
import WriteMod from "./WriteMod";

const rootReducer = combineReducers({
  RegisterMod,
  LoginMod,
  WriteMod,
});

export default rootReducer;
