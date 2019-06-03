import React, { Component } from "react";
import {httpGetMessages} from "../API/TouitApi"
import Touit from "./Touit";

class TouitContainer extends Component {



    constructor(props) {
        super(props);
        this.state = {
        touits : []}
        }

    refresh (){
        httpGetMessages(0,(response) => {
            this.setState({
                touits: response.messages,
            });
        })
    }

    componentDidMount(){
        setInterval(() => this.refresh(), 5000);
    }

    render() {
        const {touits} = this.state;
        return (
            <div className="container touit-container">
                {touits.map((touit, index) =>
                <Touit 
                    key={index}
                    name={touit.name}
                    message={touit.message}
                    timestamp={touit.ts}
                />
                )}
                
                
            </div>
        )
    }
}

export default TouitContainer;