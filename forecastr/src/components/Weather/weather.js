import React, { Component } from "react";
import "./weather.css";

class Weather extends Component {
    render() {
        return (
            <div>
                <p id="results">
                    {this.props.city}
                    <br />
                    {this.props.temperature}
                    <br />
                    {this.props.description}
                    <br />
                    {this.props.humidity}
                    <br />
                    {this.props.zip}
                </p>
            </div>
        )
    }
}

export default Weather;