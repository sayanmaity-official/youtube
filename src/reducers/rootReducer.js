import { combineReducers } from "redux";

import recommendReducer from "./recommendReducer";
import commentReducer from "./commentReducer";

const rootReducer = combineReducers({ recommendReducer, commentReducer });

export default rootReducer;
