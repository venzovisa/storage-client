import React from 'react';
import Form from './form';
import Joi from 'joi-browser';
import AlertBox from './alerts/alerts';
import axios from 'axios'; 

export default class RegisterForm extends Form {

    state = {
        form: { email: "", password: "", name: "" },
        userExist: false,
        errors: {}
    };

    schema = {
        email: Joi.string().trim().email().required().label("E-Mail"),
        password: Joi.string().trim().truncate().required().min(5).label("Password"),
        name: Joi.string().trim().required().label("Name")
    };

    doSubmit = () => {          
        axios.post(`${process.env.api_url}/register`, JSON.stringify(this.state.form), {
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => {
            if (res.status === 400) this.setState({ userExist: true })
            else window.location = '/';
            }).catch(err => {
                this.setState({ userExist: true });
                throw err
        });            
    };

    render() {

        return (
            <React.Fragment>
                <h1>Регистриране</h1>

                <form onSubmit={this.handleSubmit}>
                    {this.renderInput("email", "E-Mail","email")}
                    {this.renderInput("password", "Password", "password")}
                    {this.renderInput("name", "Name")}
                    {this.renderButton("Register")}
                </form>
                {this.state.userExist && <AlertBox alertMessage={"User already registered!"} color="info" />}
            </React.Fragment>

        );
    }
}