import React, { Component } from 'react';
import Joi from 'joi-browser';
import Input from './input';
import Select from './select';

class Form extends Component {

    state = {
        data: {},
        errors: {},
        form: {}
    };

    // Form validate
    validate = () => {
        const options = {abortEarly: false, convert: true, allowUnknown: true};
        const { error } = Joi.validate(this.state.form, this.schema, options);
        if (!error) return null;

        const errors = {};
        for (let item of error.details) errors[item.path[0]] = item.message;
        return errors;
    };

    // Input field validate
    validateProperty = ({name, value}) => {
        const obj = {[name]: value};
        const schema = {[name]: this.schema[name]};
        const {error} = Joi.validate(obj, schema);
        return error ? error.details[0].message : null;
    };

    doSubmit = () => {
        // Overwrite this in the instance
    };

    handleSubmit = e => {
        e.preventDefault();
        const errors = this.validate();
        this.setState({errors: errors || {} });
        if (errors) return;
        this.doSubmit();
    };

    handleChange = ({currentTarget: input}) => {
        const {errors} = this.state;
        const errorMessage = this.validateProperty(input);
        if (errorMessage) errors[input.name] = errorMessage;
        else delete errors[input.name];

        const { form } = this.state;
        form[input.name] = input.value;
        this.setState({form, errors});
    };

    renderButton(label){
        return (
            <button disabled={this.validate()} type="submit" className="btn btn-primary">
                {label}
            </button>
        )
    }

    renderInput(name, label, type="text"){
        const {form, errors} = this.state;
        return (
            <Input
                value={form[name]}
                name={name}
                label={label}
                onChange={this.handleChange}
                errors={errors[name]}
                type={type}
            />
        )
    }

    renderSelect(name, label, options, selectedGenre){
        const { errors } = this.state;
        return (
            <Select
                name={name}
                label={label}
                options={options}
                selectedGenre={selectedGenre}
                onChange={this.handleChange}
                errors={errors[name]}
            />
        )
    }
}

export default Form; 