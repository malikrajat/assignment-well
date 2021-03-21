import axios from "axios";
import {
	GET_ITEM_LIST,
	ITEM_URL,
	GET_COUPON_CODE,
	COUPON_URL,
	ERROR,
} from "../types";

export const getState = () => async (dispatch) => {
	try {
		const response = await axios.get(ITEM_URL);
		if (response.data) {
			dispatch({
				type: GET_ITEM_LIST,
				payload: response.data,
			});
		}
	} catch (error) {
		dispatch({
			type: ERROR,
			payload: error.message,
		});
	}
};

export const getCoupon = () => async (dispatch) => {
	try {
		const response = await axios.get(COUPON_URL);
		if (response.data) {
			dispatch({
				type: GET_COUPON_CODE,
				payload: response.data,
			});
		}
	} catch (error) {
		dispatch({
			type: ERROR,
			payload: error.message,
		});
	}
};
