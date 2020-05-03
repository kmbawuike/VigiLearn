import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomeScreen from './screens/Home';
import AuthScreen from './screens/Auth'
import DashBoardScreen from './screens/Dashboard'
const Routes = () => {
	return (
		<Router>
			<Switch>
				<Route exact path="/home">
					<HomeScreen />
				</Route>
			</Switch>
			<Switch>
				<Route exact path="/auth">
					<AuthScreen />
				</Route>
			</Switch>
			<Switch>
				<Route exact path="/dashboard">
					<DashBoardScreen />
				</Route>
			</Switch>
		</Router>
	);
};

export default Routes