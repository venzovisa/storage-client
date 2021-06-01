import React from 'react';
import Form from '../form';
import getGenres from '../../utils/getGenres';
import movies from './imdb';
import Joi from 'joi-browser';
import fetch from "node-fetch";


export default class MovieForm extends Form {

    state = {
        form: {},
        movieID: this.props.movieID,
        genres: getGenres(movies),
        errors: {}
    };

    async componentDidMount(){
        try {
            let response = await fetch(`${process.env.api_url}/get_movie`, {
                method: 'post',
                body: JSON.stringify({movieID: this.state.movieID}),
                headers: { 'Content-Type': 'application/json' }
            });
            let json = await response.json();
            await this.setState({form: json});
        }
        catch (err) {
            if (err) {
                console.log("Error while getting movie entry")
            }
        }
    }

    schema = {
        title: Joi.string().required().label("Title").min(2),
        genre: Joi.string().required().label("Genre"),
        stock: Joi.number().min(0).max(100).required().label("Stock"),
        rate: Joi.number().min(0).max(10).required().label("Rate")
    };

    handleSubmit = e => {
        e.preventDefault();
        const errors = this.validate();
        this.setState({errors: errors || {} });
        if (errors) return;
        this.doSubmit();
    };

    doSubmit = () => {

        fetch(`${process.env.api_url}/update_movie`, {
            method: 'post',
            body:    JSON.stringify(this.state.form),
            headers: { 'Content-Type': 'application/json' },
        })
            .then(res => {
                if (res.status === 200) {
                    //window.location = "/movies";
                }
            });
    };

    render() {
        const { genres, form} = this.state;

        return (
            <React.Fragment>
                <h1>Update movie</h1>

                <form onSubmit={this.handleSubmit}>
                    {this.renderInput("title", "Title")}
                    {this.renderSelect("genre", "Genre", genres, form.genre)}
                    {this.renderInput("stock", "Number in Stock")}
                    {this.renderInput("rate", "Rate")}
                    {this.renderButton("Save")}
                </form>

            </React.Fragment>

        );
    }
}