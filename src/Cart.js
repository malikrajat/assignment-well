import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getCoupon } from "./store/actions/app.actions";
import { withRouter } from "react-router-dom";

function Cart(props) {
	const [cartItems, setcartItems] = useState([]);
	const [dropDownValue, setdropDownValue] = useState("");
	const [code, setcode] = useState("");

	useEffect(() => {
		setcartItems(JSON.parse(localStorage.getItem("cartData")));
	}, [dropDownValue]);

	useEffect(() => {
		getTheCode();
	}, [props.coupon]);

	const qtyUpdate = (items, e) => {
		for (const cartItem of cartItems) {
			if (cartItem.id === items.id) {
				cartItem["qty"] = +e.target.value;
				break;
			}
		}
		localStorage.setItem("cartData", JSON.stringify(cartItems));
		setdropDownValue(e.target.value);
	};

	const makeDropDown = (items) => {
		return (
			<div className="def-number-input number-input safari_only mb-0 w-100">
				<select
					className="form-select"
					aria-label="Default select example"
					value={items.qty}
					onChange={(e) => qtyUpdate(items, e)}
				>
					<option>QTY</option>
					<option value="1">1</option>
					<option value="2">2</option>
					<option value="3">3</option>
					<option value="4">4</option>
					<option value="5">5</option>
					<option value="6">6</option>
					<option value="7">7</option>
					<option value="8">8</option>
					<option value="9">9</option>
					<option value="10">10</option>
					<option value="11">11</option>
					<option value="12">12</option>
				</select>
			</div>
		);
	};

	const removeItem = (itemId) => {
		for (const index in cartItems) {
			if (cartItems[index]["id"] === itemId) {
				cartItems.splice(index, 1);
				break;
			}
		}
		localStorage.setItem("cartData", JSON.stringify(cartItems));
		setdropDownValue(itemId);
	};

	const displayCartItem = (items) => {
		return (
			<React.Fragment key={items.id}>
				<div className="card wish-list mb-3 card-height">
					<div className="card-body">
						<div className="row mb-4">
							<div className="col-md-5 col-lg-3 col-xl-3">
								<div className="view zoom overlay z-depth-1 rounded mb-3 mb-md-0">
									<img
										className="img-fluid w-100 cartImage"
										src={items.image}
										alt={items.title}
									/>
								</div>
							</div>
							<div className="col-md-7 col-lg-9 col-xl-9">
								<div>
									<div className="d-flex justify-content-between">
										<div>
											<h5>{items.title}</h5>
											<p className="mb-3 text-muted text-uppercase small">
												{items.description.substring(
													0,
													200
												)}
											</p>
										</div>
										{makeDropDown(items)}
									</div>
									<div className="d-flex justify-content-between align-items-center">
										<div>
											<button
												type="button"
												className="btn btn-primary"
												onClick={() =>
													removeItem(items.id)
												}
											>
												Remove
											</button>
											<button
												type="button"
												className="btn btn-secondary ml-40"
											>
												Add To Wish List
											</button>
										</div>
										<p className="mb-0 ">
											<span>
												<strong>
													INR {items.price.toFixed(2)}
												</strong>
											</span>
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<hr className="mb-4" />
			</React.Fragment>
		);
	};

	const applyCode = (e) => {
		const code = e.target.value;
		setcode(code);
		if (code.length >= 4) {
			props.getCoupon();
		}
	};
	const getTheCode = () => {
		if (props.coupon[code]) {
			let { type, amount } = props.coupon[code];
			console.log(type, amount);
		} else {
			console.log("Sorry!, Coupon is not available");
		}
	};

	return (
		<div className="mt-3">
			<div className="row m-2 ">
				<div className="col-lg-8">
					{cartItems.map((items) => displayCartItem(items))}
				</div>
				<div className="col-lg-4">
					<div className="card mb-3 card-height">
						<div className="card-body">
							<h5 className="mb-3">The total amount of</h5>

							<ul className="list-group list-group-flush">
								<li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
									Temporary amount
									<span>$25.98</span>
								</li>
								<li className="list-group-item d-flex justify-content-between align-items-center px-0">
									Shipping
									<span>Gratis</span>
								</li>
								<li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
									<div>
										<strong>The total amount of</strong>
										<strong>
											<p className="mb-0">
												(including VAT)
											</p>
										</strong>
									</div>
									<span>
										<strong>$53.98</strong>
									</span>
								</li>
							</ul>

							<button
								type="button"
								className="btn btn-primary btn-block waves-effect waves-light"
							>
								Checkout
							</button>
						</div>
					</div>

					<div className="card mb-3">
						<div className="card-body">
							<div className="">
								<div className="mt-3">
									<div className="md-form md-outline mb-0">
										<input
											type="text"
											id="discount-code1"
											className="form-control font-weight-light"
											placeholder="Enter discount code"
											onChange={(e) => applyCode(e)}
											value={code}
										/>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

function mapStateToProps(state) {
	return {
		coupon: state?.couponCode?.coupons,
	};
}
export default withRouter(connect(mapStateToProps, { getCoupon })(Cart));
