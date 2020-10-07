import { combineReducers } from "redux";
import boards from "./boards";
import cards from "./cards";
import lists from "./lists";

const rootReducer = combineReducers({ boards, cards, lists });

export default rootReducer;
