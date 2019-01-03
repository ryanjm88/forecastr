import React, { Component } from "react";
import "./searchForm.css";

class SearchForm extends Component  {

    handleClick = () => function() {
        console.log(this.state.name);
    }

    render()    {
        return(
            <div className="card">
            <form onSubmit={this.props.getWeather}>
              <input type="text" placeholder="Enter your city" name="city" className="form-control" />
              <br />
              <p>or</p>
              <input type="text" placeholder="Enter your ZIP code" name="zipCode" className="form-control" />
              <br />
              <br />
              <button className="waves-effect waves-light btn" name="searchButton"><i className="material-icons left">wb_sunny</i>search</button>
            </form>
          </div>
        );
    }
}

export default SearchForm;