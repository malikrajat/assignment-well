import axios from "axios";
import {
	GET_ITEM_LIST,
	ITEM_URL,
	GET_COUPON_CODE,
	COUPON_URL,
	USER_URL,
	GET_USER_DETAILS,
} from "../types";

export const getState = () => async (dispatch) => {
	const response = await axios.get(ITEM_URL);
	if (response.data) {
		dispatch({
			type: GET_ITEM_LIST,
			payload: response.data,
		});
	}
};

export const getCoupon = () => async (dispatch) => {
	const response = await axios.get(COUPON_URL);
	if (response.data) {
		dispatch({
			type: GET_COUPON_CODE,
			payload: response.data,
		});
	}
};

export const getUserDetails = () => async (dispatch) => {
	const response = await axios.get(USER_URL);
	if (response.data) {
		dispatch({
			type: GET_USER_DETAILS,
			payload: response.data,
		});
	}
};
