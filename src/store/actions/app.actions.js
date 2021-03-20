import axios from "axios";

export const getState = () => async (dispatch) => {
	const response = await axios.get(
		"https://jsonplaceholder.typicode.com/todos"
	);
	if (response.data) {
		dispatch({
			type: "GET_CIENEMA",
			payload: response.data,
		});
	}
};
