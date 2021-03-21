import React from "react";
import { withRouter } from "react-router-dom";
import "./App.css";

function Header(props) {
	const redirectToCart = () => {
		props.history.push("/cart");
	};
	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container-fluid">
				<span className="navbar-brand mb-0 h1">Navbar</span>
				<button
					type="button"
					className="btn btn-outline-dark"
					onClick={() => redirectToCart()}
				>
					Cart
				</button>
			</div>
		</nav>
	);
}
export default withRouter(Header);
