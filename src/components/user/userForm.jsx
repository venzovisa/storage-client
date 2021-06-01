import React from 'react';
import Form from '../form';
import Joi from 'joi-browser';
import axios from "axios";

export default class UserForm extends Form {

    state = {
        form: {password: "", passwordNew: ""},
        errors: {}
    };

    schema = {
        password: Joi.string().trim().truncate().required().min(5).label("Current Password"),
        passwordNew: Joi.string().trim().truncate().required().min(5).label("New Password"),
    };

    doSubmit = async () => {
        try {
            const response = await axios.post(`${process.env.api_url}/user`,  this.state.form,  {
                headers: {
                    'Auth-Token': window.sessionStorage.authToken
                }
            });
            if (response.status === 200) {
                return this.props.history.push("/logout");
            }
        }
        catch (err){
            throw err
        }
    };

    render() {

        return (
            <React.Fragment>
                <h1>Потребителски профил</h1>

                <form onSubmit={this.handleSubmit}>
                    {this.renderInput("password", "Current Password", "password")}
                    {this.renderInput("passwordNew", "New Password", "password")}
                    {this.renderButton("Submit")}
                </form>

            </React.Fragment>

        );
    }
}