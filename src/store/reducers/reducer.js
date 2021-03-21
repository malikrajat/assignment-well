import { combineReducers } from "redux";
import { appReducer, couponReducer, anyErrorReducer } from "./app.reducer";

const rootReducer = combineReducers({
	itemList: appReducer,
	couponCode: couponReducer,
	error: anyErrorReducer,
});

export default rootReducer;
