import React, { useEffect } from "react";
import "./App.css";
import { connect } from "react-redux";
import { getState } from "./store/actions/app.actions";

const ItemList = (props) => {
	useEffect(() => {
		props.getState();
	}, []);

	const fetchItemList = (items) => {};
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
					<p className="">INR {items.price}</p>
					<a
						href="#!"
						className="btn btn-primary"
						onClick={() => fetchItemList(items)}
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

export default connect(mapStateToProps, { getState })(ItemList);
