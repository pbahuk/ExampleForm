import React from 'react';
import { Route, IndexRoute } from 'react-router';

// Importing different components of the app.
import RoutesList from './components/RoutesList';
import App from './components/App';
import FormComponent from './components/views/FormComponent';


const routes = (
	<Route path= "/" component = {App}>
		<IndexRoute component={RoutesList} />
		// Route for address related components
		<Route path="/perfectform" component= {FormComponent} />
	</Route>
);

module.exports = routes;
