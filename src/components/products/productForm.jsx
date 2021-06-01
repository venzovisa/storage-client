import React  from 'react';
import Joi from 'joi-browser';
import Form from '../form';
import axios from 'axios';

export default class ProductForm extends Form {

    state = {
        form: {
            category: "",
            title: "",
            manufacturer: "",
            quantity: 0
        },
        errors: {}
    };

    //componentDidUpdate(prevProps, prevState, snapshot) {}

    async componentDidMount(){
        try {
            const response = await axios.get(`${process.env.api_url}/get_product/${this.props.productID}`);
            await this.setState({form: response.data});
        }
        catch (err) {
            throw err;
        }
    }

    schema = {
        _id: Joi.string().label("ID").min(4),
        category: Joi.string().required().label("Category"),
        title: Joi.string().min(0).max(100).required().label("Title"),
        manufacturer: Joi.string().min(0).max(100).required().label("Manufacturer"),
        quantity: Joi.number().min(0).max(9999).required().label("Quantity")
    };

    //Form validate
    validate = () => {
        const options = {abortEarly: false, convert: true, allowUnknown: true};
        const { error } = Joi.validate(this.state.form, this.schema, options);
        if (!error) return null;

        const errors = {};
        for (let item of error.details) errors[item.path[0]] = item.message;
        return errors;
    };

    //Input field validate
    validateProperty = ({name, value}) => {
        const obj = {[name]: value};
        const schema = {[name]: this.schema[name]};
        const {error} = Joi.validate(obj, schema);
        return error ? error.details[0].message : null;
    };

    doSubmit = async () => {
        try {
            const response = await axios.post(`${process.env.api_url}/update_product/${this.props.productID}`, this.state.form);
            if (response.status === 200) {
                console.log('Product updated.');
                return this.props.history.push("/products");
            }
        }
        catch (err){
            throw err
        }
    };

    render() {

        return (
            <React.Fragment>
                <h1>Промяна на продукт</h1>

                <form onSubmit={this.handleSubmit}>
                    {this.renderInput("category", "Category")}
                    {this.renderInput("manufacturer", "Manufacturer")}
                    {this.renderInput("title", "Title")}
                    {this.renderInput("quantity", "Quantity")}
                    {this.renderButton("Save")}
                </form>

            </React.Fragment>

        );
    }
}