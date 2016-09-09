import React, { Component } from 'react';
import PerfectForm from "./PerfectForms/index";
import { addressValidation } from './validation';
import Styles from '../styles/styles-formcomponent.css';

const mySchema = {
    title: 'Add Address',
    type: 'object',
    required: ['title', 'done'],
    fields: [
        [
            {   fieldName: 'name', type: 'string', label: 'Name *', maxLength: 30, editable: true},
            {   fieldName: 'address', type: 'textarea', label: 'Address *', maxLength: 150, editable: true},
            {   fieldName: 'mobile', type: 'number', label: 'Mobile No *', maxLength: 10, editable: true},
            {   fieldName: 'permanentAddress', type: 'boolean', label: 'Permanent Address'},
        ],
        [
            {   fieldName: 'pincode', type: 'string', label: 'Pincode *', maxLength: 6, editable: true, action: pincodeValidator },
            {   fieldName: 'locality', type: 'string', label: 'Locality *', maxLength: 50, editable: true},
            {   fieldName: 'city', type: 'string', label: 'City/District *', maxLength: 30, editable: true},
            {   fieldName: 'state', type: 'string', label: 'State *', maxLength: 30, editable: true},
        ],
        [
            {   type: 'cancel', label: 'Cancel', action: cancelButtonAction},
            {   type: 'submit', label: 'Save', action: saveButtonAction},
        ],
    ],
};


const formData = {
    pincode: '560068',
    locality: 'Begur',
    city: 'Bangalore',
    state: 'Karnataka',
    name: 'Pramod MG',
    address: 'Somewhere, somewhere',
    mobile: '9914182613',
    permanentAddress: false,

    // pincode: '',
    // locality: '',
    // city: '',
    // state: '',
    // name: '',
    // address: '',
    // mobile: '',
    // permanentAddress: false,

};


/* Special validation/actions functions if needs to be written.
    Can also include the service call if needs to be made.
*/
function pincodeValidator(pincode){
    console.log('Pincode check');
}

function cancelButtonAction() {
    console.log('Cancel action called');
}

function saveButtonAction() {
    console.log('Saving action called');
}

/* Main form class */
class FormComponent extends Component {

    onSubmit(formData){
        var details = JSON.stringify(formData);
        console.log('**** On submitting in the form page:****', formData);
        alert('Filled Data:'+details);
    }

    onError(errors){
        console.log('ON Error:::', errors);
    }

    onCancel() {
        alert('We will wish to have you fill your details');
    }

    render() {
        return (
            <div className={Styles.addressComponent}>
                <div className={Styles.formWrapper}>
                    <div className={Styles.formHeading}> Personal Details Form </div>
                    <PerfectForm schema ={mySchema}
                                formData= {formData}
                                validator={ addressValidation }
                                onSubmit={this.onSubmit}
                                onCancel={this.onCancel} />
                </div>                
            </div>
        );
    }
}

export default FormComponent;
