import React, { Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
import Routes from './routes';
import Loading from './components/Loading';


function App() {
	return (
		<Fragment>
			<Routes />
			<Loading />
		</Fragment>
	);
}

export default App;
