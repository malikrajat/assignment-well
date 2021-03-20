import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ItemList from "./ItemList";
import NotFound from "./NotFound";
import Header from "./Header";
import Footer from "./Footer";

function App() {
	return (
		<div className="container">
			<Header />
			<Router>
				<Switch>
					<Route path="/" component={ItemList} exact />
					<Route path="cart" component={ItemList} />
					<Route path="**" component={NotFound} />
				</Switch>
			</Router>
			<Footer />
		</div>
	);
}

export default App;
