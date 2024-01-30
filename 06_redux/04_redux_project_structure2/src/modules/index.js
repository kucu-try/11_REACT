import menuReducer from "./MenuModules";
import userReducer from "./UserModule";
import {combineReducers} from "redux";


const rootReducer = combineReducers({
    userReducer,
    menuReducer
});

export default rootReducer;