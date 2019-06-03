import React, { Component } from "react";
import PropTYpes from "prop-types";

class Trend extends Component {


    defaultProps = {

        trend: "NoWord",
    }

    propTYpes = {
        trend: PropTYpes.string,
    }

    render() {
        const { trend } = this.props;
        
        return (< div className="container touit-item" >
            <p 
                onClick={this.changeUrl}
                style={{order: -trend[1] } }
            >
            #{trend}</p>
            </div >
            )
        }
    }
    
export default Trend;