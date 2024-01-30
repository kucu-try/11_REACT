import { composeWithDevTools } from "@redux-devtools/extension";
import rootReducer from "./modules";
import {thunk} from "redux-thunk";
import logger from "redux-logger";
import  { createStore } from "redux";
import {applyMiddleware} from "redux";


const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk, logger))
)

export default store;
