import React, { useEffect } from "react";
import "./App.css";
import { connect } from "react-redux";
import { getState } from "./store/actions/app.actions";

const ItemList = (props) => {
	useEffect(() => {
		fetchItemList();
		console.log("user effect");
	}, []);

	const fetchItemList = () => {
		props.getState();
	};
	const displayListOfItems = (items) => {
		return (
			<div className="card m-2 cardWidth" key={items.id}>
				<img
					src="https://mdbootstrap.com/img/new/standard/city/062.jpg"
					className="card-img-top"
					alt="..."
				/>
				<div className="card-body">
					<h5 className="card-title">Card title</h5>
					<p className="card-text">
						Some quick example text to build on the card title and
						make up the bulk of the card's content. Some quick
						example text to build on the card title and make up the
						bulk of the card's content. Some quick example text to
						build on the card title and make up the bulk of the
						card's content.
					</p>
				</div>

				<div className="card-body">
					<a
						href="/#"
						className="card-link"
						onClick={() => fetchItemList()}
					>
						Card link
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
// function mapDispatchToProps(dispatch) {
// 	return {
// 		increment: () => dispatch({ type: "INCREMENT" }),
// 		decrement: () => dispatch({ type: "DECREMENT" }),
// 	};
// }
// export default connect(mapStateToProps, mapDispatchToProps)(ItemList);
export default connect(mapStateToProps, { getState })(ItemList);
// export default ItemList;
