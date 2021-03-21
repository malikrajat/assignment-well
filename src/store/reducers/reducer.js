import { combineReducers } from "redux";
import { appReducer, couponReducer, userReducer } from "./app.reducer";

const rootReducer = combineReducers({
	itemList: appReducer,
	couponCode: couponReducer,
	userDetails: userReducer,
});

export default rootReducer;
