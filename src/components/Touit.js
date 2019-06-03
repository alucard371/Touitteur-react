import React, { Component } from "react";
import PropTYpes from "prop-types";

class Touit extends Component{

    
    defaultProps = {

        message: "Pas de messages",
        name: "Pas d'auteur",
        
    }

    propTYpes = {
       message: PropTYpes.string,
       name: PropTYpes.string,
    }

    render() {
        const { message, name, timestamp } = this.props;
        return (
            <div className="container touit-item" style={{order: -timestamp}}>
                <p>{message}</p>
                <span>{name}</span>
            </div>
        )
    }
}

export default Touit;