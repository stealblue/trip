import { combineReducers } from "redux";
import RegisterModule from "./RegisterModule";
import LoginModule from "./LoginModule";
import WriteModule from "./WriteModule";


const rootReducer = combineReducers({
    RegisterModule,
    LoginModule,
    WriteModule,
});

export default rootReducer;