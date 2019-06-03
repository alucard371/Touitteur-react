import React, { Component } from "react";

import {httpSendMessage} from "../API/TouitApi"

class SendMessageForm extends Component {

    constructor(props){
        super(props);
        this.state = {
            author:"",
            message:""
        }
    }

    submit = (event) => {
        event.preventDefault();
        const{author, message} = this.state;
        httpSendMessage(author, message, () => {});
        this.setState({
            message: ""
        });
    };

    authorChange = (event) => {
        this.setState({
            author: event.target.value
        });
    };

    descriptionChange = (event) => {
        this.setState({
            message: event.target.value
        });
    };

    render() {
        const {author, message} = this.state;
        return (
            <div>
            <form onSubmit={this.submit} >
              <div className="container form-container">
                <input
                type="text"
                name="author"
                placeholder="votre nom"
                maxLength={16}
                className="form-item-name"
                value = {author}
                onChange={this.authorChange}
                />
                <input type="text" name="description" 
                placeholder="description"
                maxLength={256}
                className="form-item-name"
                value = {message}
                onChange={this.descriptionChange}
                />
                <input type="submit" value="submit" className="submit"/>
              </div>
            </form>
          </div>
        )
    }
}

export default SendMessageForm;