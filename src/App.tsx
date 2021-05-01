import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import Board from "./pages/Board";
import BoardDetail from "./pages/BoardDetail";
import Write from "./pages/Write";

function App() {
	return (
		<Router>
			<Switch>
				<Route path="/" component={Home} exact />
				<Route path="/board" component={Board} exact />
				<Route path="/board/:id" component={BoardDetail} />
				<Route path="/write" component={Write} />
			</Switch>
		</Router>
	);
}

export default App;
