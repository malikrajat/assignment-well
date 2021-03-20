import { GET_ITEM_LIST } from "../types";

const initialState = {
	list: [],
};

const appReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_ITEM_LIST:
			const list = action.payload;
			return { ...state, list };
		default:
			return state;
	}
};
export default appReducer;
