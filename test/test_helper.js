import React from 'react';

import jsdom from 'jsdom';
import jquery from 'jquery';
import TestUtils from 'react-addons-test-utils';
import ReactDOM from 'react-dom';


// For providing the store for the component
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from '../src/reducers';

// chai-jquery
import chai, { expect } from 'chai';
import chaiJquery from 'chai-jquery';

/* ---------------------------------------------------------------------------------------------------------------------
 Setup the testing environment to run like a browser in the terminal.
 For browsers (window), but while running in a node environmnet window -> global.
 We create a fake html and assign it to the document, indirectly giving it html to render.
 Assigning is required since when jquery loads up, it assumes that document, window all variables are present.
 So, we need to specifically tell the jquery loader to use our window. Restricting its view to our window.

 Refer : https://github.com/tmpvar/jsdom
 --------------------------------------------------------------------------------------------------------------------- */
global.document = jsdom.jsdom('<!doctype html><body></body></html>');
global.window = global.document.defaultView;

// Forcing the jquery variable to use our version of window.
const $ = jquery(global.window);
global.navigator = {
    userAgent: 'node.js'
};



/* ---------------------------------------------------------------------------------------------------------------------
 Build renderComponent helper function that renders the passed 'React Component' into the environment created.
 We wrap the html of the React element inside a jquery wrapper.
 TestUtils is used to render the React Component for a testing framework. componentInstance is the rendered component,
 but does not hold the DOM element associated with the element.
 Wrapping the DOMNode with jquery.

 We have used redux as the wrapper for providing store, we need a wrapper here also to render the components as they
 expect the data, actions to come through props.
 We want to render the connected version of any Component.
 renderComponent: arguments  ComponentClass : React element to be displayed.
 props: Any props that should be placed directly on the Component
 state: Any application level state that we want to inject in redux store.

 Refer : https://facebook.github.io/react/docs/test-utils.html
 --------------------------------------------------------------------------------------------------------------------- */
function renderComponent(ComponentClass, props, state) {
    const componentInstance = TestUtils.renderIntoDocument(
        <Provider store={createStore(reducers, state)}>
            <ComponentClass  { ...props }/>
        </Provider>);

    return $( ReactDOM.findDOMNode(componentInstance));
}


/* ---------------------------------------------------------------------------------------------------------------------
 Build helper for simulating events in the component.
 We add a simulate function to every jquery instance that is created.
 arguments : eventName: Event that has occured, value: Any new value to be attached to the element
 Element is accesed using the 'this' element as the scope is passed while calling the function.
 TestUtils is used to create the events that are asked.
 Selector can have multiple elements that's why taken the this[0]
 --------------------------------------------------------------------------------------------------------------------- */
$.fn.simulate = function(eventName, value) {
    if (value) {
        this.val(value);
    }
    TestUtils.Simulate[eventName](this[0]);
}

/* Set up chai-jquery */
chaiJquery(chai, chai.util, $);

export { renderComponent, expect };

