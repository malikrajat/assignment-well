import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";

const ItemList = lazy(() => import("./ItemList"));
const Cart = lazy(() => import("./Cart"));
const Invoice = lazy(() => import("./Invoice"));
const OrderHistory = lazy(() => import("./OrderHistory"));
const NotFound = lazy(() => import("./NotFound"));
const Header = lazy(() => import("./Header"));
const Footer = lazy(() => import("./Footer"));

const App = () => {
	return (
		<div className="container">
			<Provider store={store}>
				<Router>
					<Suspense fallback={<div>Loading...</div>}>
						<Header />
						<Switch>
							<Route path="/" component={ItemList} exact />
							<Route path="/cart" component={Cart} />
							<Route path="/invoice" component={Invoice} />
							<Route path="/orders" component={OrderHistory} />
							<Route path="**" component={NotFound} />
						</Switch>
						<Footer />
					</Suspense>
				</Router>
			</Provider>
		</div>
	);
};

export default App;
