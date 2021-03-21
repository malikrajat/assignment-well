import { GET_ITEM_LIST, GET_COUPON_CODE } from "../types";

const initialState = {
	list: [],
};
const initCouponState = {
	coupons: [],
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
