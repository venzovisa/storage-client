import React, {Component} from 'react';
import fetch from "node-fetch";

class TestForm extends Component {


    state = {
        form: {
            category: "",
            title: "",
            manufacturer: "",
            quantity: ""
        },
        value: ""
    };


    async componentDidMount(){
        try {
            let response = await fetch(`http://localhost:3001/get_product/5de23c4b888e99164040e043`, {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' }
            });
            let json = await response.json();
            await this.setState({form: json[0]});
        }
        catch (err) {
            if (err) {
                console.log("Error while getting product entry");
                throw err;
            }
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log(this.state.form);
    }

    handleChange = ({currentTarget: input}) => {
        const { form } = this.state;
        form[input.name] = input.value;
        this.setState({form});
    };

    handleSubmit = (event) => {
        alert('A name was submitted: ' + this.state.form);
        event.preventDefault();
    };

    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
                    <input name={'category'} placeholder={'Category'} type="text" value={this.state.form.category} onChange={this.handleChange} />
                    <input name={'manufacturer'} placeholder={'Manufacturer'} type="text" value={this.state.form.manufacturer} onChange={this.handleChange} />
                    <input name={'title'} placeholder={'Title'} type="text" value={this.state.form.title} onChange={this.handleChange} />
                    <input name={'quantity'} placeholder={'Quantity'} type="text" value={this.state.quantity} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }

}

export default TestForm;