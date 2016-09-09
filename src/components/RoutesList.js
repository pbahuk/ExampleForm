import React from 'react';
import { IndexLink, Link } from 'react-router';
import Styles from './Styles/styles-routes.css';

const RoutesList = () => {
    const RoutesData = (<div className={Styles.mainContainer}>
    		<h3> Welcome to the world of PerfectForms </h3>
    		<div className={Styles.infoPara}>Perfect Forms library provides a set of tools for React to handle form rendering and validation.</div>
			<div className={Styles.infoPara}>It provides a schema language to define form structure and validation and a set of form components to render schemas into UI.</div>
			<div className={Styles.infoPara}>Data flow between Perfect Forms components provides strong immutability guarantees. Form state accessible from a single location and can be snapshoted with almost no overhead.</div>
			<div className={Styles.infoPara}>Almost every aspect of Perfect Forms is designed to be extendable. It is easy to customize the behaviour of the existing components or create completely new ones.</div>
			<div className={Styles.infoPara}>See documentation for more information on how to use Perfect Forms.</div>
            <div className={Styles.formLink}><Link to="/perfectform">Find a Form</Link></div>
        </div>);
    return RoutesData;
};

export default RoutesList;
