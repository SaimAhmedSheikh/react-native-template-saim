import { combineReducers } from "redux";
import AuthReducer from "../reducers/AuthReducer";

// Combine all reducers here
const AllReducers = combineReducers({
    Auth: AuthReducer,
})

export default AllReducers;
