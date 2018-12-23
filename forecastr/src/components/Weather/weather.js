import React, { Component } from "react";

class Weather extends Component{
    render(){
        return(
            <div>
                {this.props.city}
                <br />
                {this.props.temperature}
                <br />
                {this.props.description}
                <br />
                {this.props.humidity}
                <br />
            </div>
        )
    }
}

export default Weather;