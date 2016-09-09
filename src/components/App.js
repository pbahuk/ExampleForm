import React from 'react';

const App = ({ children }) => {
    let childrenData;
    if (children) {
        childrenData = (<div>{children}</div>);
    }
    return childrenData;
};

export default App;
