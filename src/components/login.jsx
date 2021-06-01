import React from 'react';
import Form from './form';
import Joi from 'joi-browser';
import fetch from "node-fetch";
import AlertBox from './alerts/alerts';

export default class LoginForm extends Form {

    state = {
      form: {email: "", password: ""},
      errors: {},
      loginFailed: false
    };

    schema = {
      email: Joi.string().email().min(5).max(255).required().label("E-Mail"),
      password: Joi.string().min(5).max(1024).required().label("Password")
    };

    doSubmit = () => {
        fetch(`${process.env.REACT_APP_API_URL}/auth`, {
            method: 'POST',
            body:    JSON.stringify(this.state.form),
            headers: {'Content-Type': 'application/json'},
        })
            .then(res => {
                if (res.status === 400) this.setState({ loginFailed: true });
                return res.json();
            })
            .then(json => {
                console.log(json);
                sessionStorage.setItem('authToken', json.authToken);
                //this.props.history.push('/');
                // full page reload required
                window.location = '/';
            })
            .catch(err => {
                console.log('err: ', err);
               if (err.response && err.response.status === 400){
                   const errors = {...this.state.errors};
                   errors.username = err.response.data;
                   this.setState({ errors });
               }
            });
    };

    render() {

        return (
            <React.Fragment>
                <h1>Вписване</h1>
                <form onSubmit={this.handleSubmit}>
                    {this.renderInput("email", "E-Mail")}
                    {this.renderInput("password", "Password", "password")}
                    {this.renderButton("Login")}
                </form>
                {this.state.loginFailed && <AlertBox alertMessage={"Invalid username or password"} color="info" />}
            </React.Fragment>

        );
    }
}