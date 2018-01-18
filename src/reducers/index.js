import { combineReducers } from "redux";
import * as STATES from "../constants/states";
import coins from "./coins";
import user from "./user";

const appReducer = combineReducers({
    [STATES.coins]: coins,
    [STATES.user]: user
});

export default appReducer;
