import React, { Component } from 'react';
import Styles from '../styles-form.css';

class CheckBox extends Component {

    constructor(props) {
        super(props);
        this.state = {
            inputField: this.props.fieldName,
            isSelected: this.props.defaultValue,
        };
    }

    handleChange(event) {
        this.setState({
            isSelected: !this.state.isSelected
        });
        this.props.changeFormData(this.state.inputField, !this.state.isSelected);
    }


    render() {
        let type = this.props.type,
            defaultValue = this.props.defaultValue,
            label = this.props.label;

        return (
            <div className={Styles.checkBoxWrapper}>
                <div className={Styles.checkBoxImage}><input type="checkbox" checked= {this.state.isSelected} onChange={this.handleChange.bind(this)} /></div>
                <div className={Styles.checkBoxLabel}>{label}</div>
            </div>
        );
    }
}

export default CheckBox;
