import React, { Component } from 'react';
import Styles from '../styles-form.css';

class TextInput extends Component {
    // Pure render mixin
    // Debounce from lodash.
    // Also check if you can include only specific part of lodash.

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
        //let {label, error } = this.props;
        let label = this.props.label;
        let Error = this.props.error.status ? <div className={Styles.invalidField}> {this.props.error.message} </div> : null;
        let textInputData = this.props.editable ?
            (<div className={Styles.group}>
                <input  type="text"
                        defaultValue= {this.props.defaultValue}
                        maxLength = {this.props.maxLength}
                        onChange = {(event) => this.handleChange(event)}
                        onBlur = { this.handleBlur.bind(this) }
                        onFocus = { this.handleFocus.bind(this) } />
              <span className={Styles.highlight}></span>
              <span className={Styles.bar}></span>
              <label className={Styles.labelText}>{label}</label>
            </div> ) :
            (<div className={Styles.group}>      
                <input  type="text" 
                        placeholder={label}
                        defaultValue={this.props.defaultValue}
                        maxLength = {this.props.maxLength}
                        onChange = {(event) => this.handleChange(event)}
                        onBlur = { (event) => this.handleBlur() }
                        onFocus = { (event) => this.handleFocus() }
                        readOnly />
                <span className={Styles.highlight}></span>
                <span className={Styles.bar}></span>
            </div>);

        return (
            <div>
                {textInputData}
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
