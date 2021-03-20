import { combineReducers } from "redux";
import itemList from "./app.reducer";

const rootReducer = combineReducers({
	itemList,
});

export default rootReducer;
