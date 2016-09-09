import React, { Component } from 'react';
import Styles from '../styles-form.css';

class TextInput extends Component {

    handleChange(event) {
        this.props.changeFormData(this.props.fieldName, event.target.value);
    }

    handleFocus() {
        if (this.props.error.status) {
            this.props.changeErrorState(this.props.fieldName, false);
        }
    }

    handleBlur() {
        const inputData = this.props.defaultValue;

        if (inputData === '') {
            this.props.changeErrorState(this.props.fieldName, true, 'Required');
        } else if (inputData.match(this.props.pattern)) {
            if (this.props.action) {
                this.props.action();
            }
        } else {
            this.props.changeErrorState(this.props.fieldName, true, 'Invalid field');
        }
    }


    render() {
        let label = this.props.label;
        let Error = this.props.error.status ? <div className={Styles.invalidField}> {this.props.error.message} </div> : null;

        return (
            <div>
                <div className={Styles.group}>
                    <textarea  type="text"
                           defaultValue= {this.props.defaultValue}
                           maxLength = {this.props.maxLength}
                           onChange = {(event) => this.handleChange(event)}
                           onBlur = { this.handleBlur.bind(this) }
                           onFocus = { this.handleFocus.bind(this) } />
                    <span className={Styles.highlight}></span>
                    <span className={Styles.bar}></span>
                    <label className={Styles.labelText}>{label}</label>
                </div>
                { Error }
            </div>
        );
    }
}

TextInput.propTypes = {
    label: React.PropTypes.string,
    type: React.PropTypes.string,
    fieldName: React.PropTypes.string,
    error: React.PropTypes.object,
    defaultValue: React.PropTypes.string,
    maxLength: React.PropTypes.number,
    pattern: React.PropTypes.string,
    editable: React.PropTypes.bool,
    action: React.PropTypes.func,
    changeFormData: React.PropTypes.func,
    changeErrorState: React.PropTypes.func,
};

export default TextInput;

