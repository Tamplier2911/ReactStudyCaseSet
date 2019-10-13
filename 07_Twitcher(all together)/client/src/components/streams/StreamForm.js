import './StreamForm.scss';
import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class StreamForm extends Component {

    renderError(meta){
        if(meta.touched && meta.error){
            return <div className="form__field--error">{meta.error}</div>;
        } else {
            return <div className="form__field--error" >&nbsp;</div>;
        }
    };

    renderInput = (formProps) => {
        // console.log(formProps);
        // console.log(formProps.meta);
        return(
            <div className="form__field">
                <input className="form__field--input" type="text" {...formProps.input} />
                <label className="form__field--label">{formProps.label}</label>
                {this.renderError(formProps.meta)}
            </div>
        );
    };

    onSubmit = (formValues) => {
        // return console.log(formValues);
        this.props.onSubmit(formValues);
    };

    render(){
        // console.log(this.state);
        // console.log(this.props);
        return(
            <div className="form__wrap">
                <form className="form__body" autoComplete="off" onSubmit={this.props.handleSubmit(this.onSubmit)}>
                    <Field name="title" component={this.renderInput} label="Enter Title"/>
                    <Field name="description" component={this.renderInput} label="Enter Description"/>
                    <input className="form__field--submit" type="submit" value="Submit"></input>
                </form>
            </div>
        );
    };
}

const validate = (formValues) => {
    const errors = {};
    if (!formValues.title) {
        // if user did not enter title
        errors.title = 'Please, enter Stream Title to purceed.';
    }

    if(!formValues.description) {
        // if user did not enter desc
        errors.description = 'Please, enter Stream Description to purceed.';
    }

    return errors;
}

export default reduxForm({
    form: 'streamForm',
    validate: validate,
})(StreamForm);

