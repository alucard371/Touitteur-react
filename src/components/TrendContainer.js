import React, { Component } from "react";
import { httpGetTrends } from "../API/TouitApi"
import Trend from "./Trend";


class TrendContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            trends: []
        }
    }

    refresh() {
        httpGetTrends((response) => {

            let test = Object.entries(response);
            console.log(test);
            this.setState({
                trends: test,
            });
        })
    }

    componentDidMount() {
        setInterval(() => this.refresh(), 5000);
    }

    changeUrl(event){
        window.location.hash = event.target.innerHTML;
        console.log(window.location);
        console.warn(window.location.hash);
    }

    render() {
        
        const { trends } = this.state;
        return(
          <div className="container trend-container">
            {
              trends.map( (trend, index) =>
                (<Trend
                  onClick={this.changeUrl}
                  style={{order: trend[1] } }
                  key={index}
                  trend={trend[0]}
                />)
              )
            }
          </div>
        );
      }
        
    }

    



    export default TrendContainer;