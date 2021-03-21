import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

import "../App.css";
import { getState } from "../store/actions/app.actions";

const ItemList = (props) => {
	useEffect(() => {
		props.getState();
	}, []);

	const fetchItemList = (item) => {
		let myCart = JSON.parse(localStorage.getItem("cartData"));
		if (myCart) {
			let matchFound = false;
			for (const cartItem of myCart) {
				if (cartItem.id === item.id) {
					cartItem["qty"] += 1;
					matchFound = true;
					break;
				}
			}
			if (!matchFound) {
				item["qty"] = 1;
				myCart = [...myCart, item];
			}
		} else {
			item["qty"] = 1;
			myCart = [item];
		}
		localStorage.setItem("cartData", JSON.stringify(myCart));
		props.history.push("/cart");
	};
	const displayListOfItems = (items) => {
		return (
			<div className="card m-2 cardWidth" key={items.id}>
				<img
					src={items.image}
					className="card-img-top h-25 mt-3"
					alt={items.title}
				/>
				<div className="card-body">
					<h5 className="card-title ">
						{items.title.substring(0, 200)}
					</h5>
					<p className="card-text">
						{items.description.substring(0, 200)}
					</p>
					<p className="">INR {items.price.toFixed(2)}</p>
					<a
						className="btn btn-primary"
						onClick={() => fetchItemList(items)}
						href="#!"
					>
						Add To Card
					</a>
				</div>
			</div>
		);
	};
	return (
		<div className="m-3 row">
			{props?.list?.length > 0 &&
				props?.list.map((items) => displayListOfItems(items))}
		</div>
	);
};
function mapStateToProps(state) {
	return {
		list: state?.itemList?.list,
	};
}

export default withRouter(connect(mapStateToProps, { getState })(ItemList));
