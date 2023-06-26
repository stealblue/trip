import { combineReducers } from "redux";
import RegisterModule from "./RegisterModule";
import LoginModule from "./LoginModule";


const rootReducer = combineReducers({
    RegisterModule,
    LoginModule
});

export default rootReducer;