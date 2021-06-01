import React from 'react';
import Form from '../form';
import Joi from 'joi-browser';
import axios from 'axios';
import { getUser } from '../../utils/auth';

export default class ChatForm extends Form {

    constructor(props) {
        super(props);
        this.chatWindow = React.createRef();
    }

    state = {
        user: getUser().name || "Unknown user",
        form: [],
        message: "",
        errors: {}
    };

    schema = {
        form: Joi.array(),     
        message: Joi.string().max(999)
    };

    // Update chat window every second
    interval = () => {
        setInterval(async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_API_URL}/chat`);
                this.setState({ form: response.data });
            }
            catch (err) {
                throw err;
            }
        }, 1000);
        return clearInterval(this.interval);
    }  

    chatScrollBottom = () => {
        this.chatWindow.current.scroll(0, this.chatWindow.current.scrollHeight + 1000);
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        // Capture the scroll position so we can adjust scroll later.
        return this.chatWindow.current.scrollHeight - this.chatWindow.current.scrollTop;
    }

    componentDidMount() {
        this.interval();
        this.chatScrollBottom();
    }  

    componentDidUpdate(prevProps, prevState, snapshot) {
        this.chatWindow.current.scrollTop = this.chatWindow.current.scrollHeight - snapshot;
    }

    componentWillUnmount() {
       clearInterval(this.interval);
    }

    validate = () => {
        return false
    }

    handleSubmit = e => {
        e.preventDefault();
        
        const options = { abortEarly: false, convert: true, allowUnknown: true };
        const { error } = Joi.validate(this.state.message, this.schema.message, options);      
        this.setState({ errors: error || {} });
        if (error) return;           
        let { form } = this.state;
        const newMessage = {
            date: new Date().toString(),
            author: this.state.user,
            content: this.state.message
        }
        form.push(newMessage);
        this.setState({ form });
  
        axios.post(`${process.env.REACT_APP_API_URL}/chat`, JSON.stringify({
            status: "public",
            message: newMessage
        }), {
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => {
            //if (res.status === 400) this.setState({ userExist: true })
            //else window.location = '/';
        }).catch(err => {
           // this.setState({ userExist: true });
            throw err
        });      

        this.chatScrollBottom();
    };

    handleChange = e => {
        let { message } = this.state;
        message = e.currentTarget.value;     
        this.setState({ message });
    };

    render() {
        const { form } = this.state;
        const messages = form.map((message, index) =>
            <li className="message-item" key={index}>
                <p><em className="message-date">{message.date}</em><br />
                    <strong className="message-author">{message.author}:</strong></p>
                <p>{message.content}</p>
            </li>
        );
        return (
            <React.Fragment>
                <ul id="message-box" className="message-box" ref={this.chatWindow}>{messages}</ul>

                <form onSubmit={this.handleSubmit}>
                    {this.renderInput("message", "", "text")}                
                    {this.renderButton("Send")}
                </form>
            </React.Fragment>
        );
    }
}