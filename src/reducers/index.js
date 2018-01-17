import { combineReducers } from "redux";
import coins from "./coins";
import user from "./user";

const appReducer = combineReducers({
    coins,
    user
});

export default appReducer;
