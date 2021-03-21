import { GET_ITEM_LIST, GET_COUPON_CODE, GET_USER_DETAILS } from "../types";

const initialState = {
	list: [],
};
const initCouponState = {
	coupons: [],
};
const initUserState = {
	user: [],
};

export const appReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_ITEM_LIST:
			const list = action.payload;
			return { ...state, list };
		default:
			return state;
	}
};

export const couponReducer = (state = initCouponState, action) => {
	switch (action.type) {
		case GET_COUPON_CODE:
			const coupons = action.payload;
			return { ...state, coupons };
		default:
			return state;
	}
};

export const userReducer = (state = initUserState, action) => {
	switch (action.type) {
		case GET_USER_DETAILS:
			const user = action.payload;
			return { ...state, user };
		default:
			return state;
	}
};
