import React from 'react';
import Form from './form';
import Joi from 'joi-browser';

export default class RegisterForm extends Form {

    state = {
        form: {username: "", password: "", name: ""},
        errors: {}
    };

    schema = {
        username: Joi.string().email().required().label("Username"),
        password: Joi.string().trim().truncate().required().min(5).label("Password"),
        name: Joi.string().required().label("Name")
    };

    doSubmit = () => {
        // Call to server
        console.log("Submitted");
    };

    render() {

        return (
            <React.Fragment>
                <h1>Регистриране</h1>

                <form onSubmit={this.handleSubmit}>
                    {this.renderInput("username", "Username","email")}
                    {this.renderInput("password", "Password", "password")}
                    {this.renderInput("name", "Name")}
                    {this.renderButton("Register")}
                </form>

            </React.Fragment>

        );
    }
}