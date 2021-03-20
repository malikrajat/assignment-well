// import { GET_CIENEMA } from "../constents";

const initialState = {
	list: [],
};

export default (state = initialState, action) => {
	switch (action.type) {
		case "GET_CIENEMA":
			const list = action.payload;
			return { ...state, list };
		default:
			return state;
	}
};
