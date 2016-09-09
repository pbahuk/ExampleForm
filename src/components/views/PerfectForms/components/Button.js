import React, { Component } from 'react';
import Styles from '../styles-form.css';

class Button extends Component {

    handleClick(event) {
        this.props.action();
    }

    render() {
        let buttonName = "eachButton " + this.props.label;
        return(
            <div className={Styles.buttonContainer}>
                <button className={buttonName} onClick={this.handleClick.bind(this)}>{this.props.label}</button>
            </div>
        );
    }
}

export default Button;