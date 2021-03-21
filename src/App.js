import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";

import ItemList from "./ItemList";
import NotFound from "./NotFound";
import Header from "./Header";
import Footer from "./Footer";
import store from "./store";
import Cart from "./Cart";
import Invoice from "./Invoice";

const App = () => {
	return (
		<div className="container">
			<Provider store={store}>
				<Router>
					<Header />
					<Switch>
						<Route path="/" component={ItemList} exact />
						<Route path="/cart" component={Cart} />
						<Route path="/invoice" component={Invoice} />
						<Route path="**" component={NotFound} />
					</Switch>
					<Footer />
				</Router>
			</Provider>
		</div>
	);
};

export default App;
