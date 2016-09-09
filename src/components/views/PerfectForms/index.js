import React, { Component } from 'react';
import TextInput from './components/TextInput';
import CheckBox from './components/CheckBox';
import Button from './components/Button';
import TextArea from './components/TextArea';
import Styles from './styles-form.css';
import _ from 'lodash';

class PerfectForm extends Component {
    // It should also include the data in the form as a formData object.
    // It should also include a validation state for each and every component.
    // As and when submission is called. Form should have validation object.
    constructor(props) {
        super(props);
        let formErrorState = {};
        for (let key in this.props.formData) {
            formErrorState[key] = { status: false, message: '' };
        }
        this.state = {
            formData: this.props.formData,
            formErrorState: formErrorState,
        };
    }

    changeFormData(fieldName, value) {
        let formData = this.state.formData,
            formErrorState = this.state.formErrorState;

        formData[fieldName] = value;
        formErrorState[fieldName] = { status: false, message: '' };

        this.setState({
            formData: formData,
            formErrorState: formErrorState,
        });
    }

    /* Changing the error state of evry child component of the form.
        arguments: fieldName: field in the form.
                    state: New state (True or false)
                    message: New error message
     */
    changeErrorState(fieldName, state, message) {
        let formErrorState = this.state.formErrorState;
        formErrorState[fieldName] = { status: state, message: message };

        this.setState({
            formErrorState: formErrorState
        });
    }

    runValidator() {
        const formData = this.state.formData;
        let formErrorState = this.state.formErrorState,
            validator = this.props.validator,
            keyValue, keyValidator;

        for (let key in formData) {
            keyValue = formData[key];
            keyValidator = validator[key];

            if (keyValue && keyValidator) {
                if (keyValue && !keyValue.match(keyValidator)) {
                    formErrorState[key] = { status: true, message: 'Invalid field' };
                }
            } else if (keyValue === '') {
                formErrorState[key] = {status: true, message: 'Required'};
                if (key === 'pincode') {
                    formErrorState['city'] = { status: true, message: 'Required' };
                    formErrorState['state'] = { status: true, message: 'Required' };
                }
            }
        }
        let componentWithError = _.find(formErrorState, function(errorState){
            return errorState.status === true;
        });
        if (componentWithError) {
            this.setState({
                formErrorState: formErrorState,
            });
        } else {
            this.props.onSubmit(formData);
        }
    }

    render() {
        let CardFields,
            mappedFields,
            inputData,
            value,
            error,
            fieldName,
            validatorPattern;
        const fields = this.props.schema.fields;

        if (fields.length > 0) {
            CardFields = fields.map((bunchFields, outerIndex) => {
                mappedFields = bunchFields.map((field, index) => {
                    fieldName = field.fieldName;
                    value = this.state.formData[fieldName] || '';

                    switch (field.type) {
                        case 'string':  error = this.state.formErrorState[fieldName];
                                        validatorPattern = this.props.validator[fieldName];
                                        inputData = <TextInput key={index}
                                                               type = { field.type }
                                                               fieldName = { fieldName }
                                                               label = { field.label }
                                                               defaultValue = { value }
                                                               error = { error }
                                                               maxLength = { field.maxLength }
                                                               pattern = { validatorPattern }
                                                               editable= { field.editable }
                                                               action = { field.action }
                                                               changeFormData = { this.changeFormData.bind(this) }
                                                               changeErrorState = {this.changeErrorState.bind(this) } />;
                                        break;

                        case 'number':  error = this.state.formErrorState[fieldName];
                                        validatorPattern = this.props.validator[fieldName];

                                        inputData = <TextInput key={index}
                                                               type = { field.type }
                                                               fieldName = { fieldName }
                                                               error = { error }
                                                               defaultValue = { value }
                                                               label = { field.label }
                                                               maxLength = { field.maxLength }
                                                               pattern = { validatorPattern }
                                                               editable= { field.editable }
                                                               action = { field.action }
                                                               changeFormData = { this.changeFormData.bind(this) }
                                                               changeErrorState = {this.changeErrorState.bind(this) } />;
                                        break;

                        case 'textarea':error = this.state.formErrorState[fieldName];
                                        validatorPattern = this.props.validator[fieldName];

                                        inputData = <TextArea key={index}
                                                               type = { field.type }
                                                               fieldName = { fieldName }
                                                               error = { error }
                                                               defaultValue = { value }
                                                               label = { field.label }
                                                               maxLength = { field.maxLength }
                                                               pattern = { validatorPattern }
                                                               editable= { field.editable }
                                                               action = { field.action }
                                                               changeFormData = { this.changeFormData.bind(this) }
                                                               changeErrorState = {this.changeErrorState.bind(this) } />;
                                        break;

                        case 'boolean': inputData = <CheckBox key = {index}
                                                              type = {field.type}
                                                              fieldName = { fieldName }
                                                              defaultValue = { value }
                                                              label = { field.label }
                                                              changeFormData = { this.changeFormData.bind(this) } />;
                                        break;

                        case 'submit': inputData = <Button key = { index }
                                                           type = { field.type }
                                                           label = { field.label }
                                                           action = { this.runValidator.bind(this) } />;
                                        break;                   

                        case 'cancel': inputData = <Button key = { index }
                                                           type = { field.type }
                                                           label = { field.label }
                                                           action = { this.props.onCancel.bind(this) } />;                                   
                                        break;

                        default: inputData = null;
                    }
                    return inputData;
                });
                return (<div className={ Styles.cardComponent } key={ outerIndex }> { mappedFields }</div>);
            });
        }
        return (<div>{ CardFields }</div>);
    }
}

PerfectForm.propTypes = {
    schema: React.PropTypes.object,
    formData: React.PropTypes.object,
    validator: React.PropTypes.object,
    onSubmit: React.PropTypes.func,
};

export default PerfectForm;
