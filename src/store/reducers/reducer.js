import { combineReducers } from "redux";
import { appReducer, couponReducer } from "./app.reducer";

const rootReducer = combineReducers({
	itemList: appReducer,
	couponCode: couponReducer,
});

export default rootReducer;
