import React from 'react';
import ReactDOM from 'react-dom';

// Importing components for React-routing.
import { Router, useRouterHistory } from 'react-router';
import { createHashHistory } from 'history';
const appHistory = useRouterHistory(createHashHistory)({ queryKey: false });
import routes from './routes';

ReactDOM.render(
	<Router history={appHistory} onUpdate= {() => window.scrollTo(0, 0)}>
		{routes}
	</Router>
	, document.getElementById('app'));
