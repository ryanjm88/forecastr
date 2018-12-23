import React, { Component } from 'react';
import Header from "../src/components/Header";
import SearchForm from "../src/components/SearchForm";
import Weather from "../src/components/Weather";
import './App.css';

var APIkey = "8b076f5b1b5730cd519b838268d9d96c";


class App extends Component {

  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  }

  getWeather = async (event) => {
    event.preventDefault();

    const cityName = event.target.elements.city.value;
    const zipName = event.target.elements.zipCode.value;

    const apiCallCity = await fetch(`https://api.openweathermap.org/data/2.5/weather?&q=${cityName}&apikey=${APIkey}&units=imperial`);
    const apiCallZip = await fetch(`https://api.openweathermap.org/data/2.5/weather?&zip=${zipName}&apikey=${APIkey}&units=imperial`);

    const dataCity = await apiCallCity.json();
    const dataZip = await apiCallZip.json();
    console.log(dataCity);
    console.log(dataZip);

    var tempa1 = Math.round(dataCity.main.temp);

    this.setState(
      {
        temperature: tempa1 + " °F",
        city: dataCity.name,
        country: dataCity.sys.country,
        humidity: "Humidity: " + dataCity.main.humidity + "%",
        description: dataCity.weather[0].description,
        error: ""
      }
    )
  }

  render() {
    return (
      <center>
        <Header />
        <SearchForm getWeather={this.getWeather} />
        <Weather
          temperature={this.state.temperature}
          city={this.state.city}
          country={this.state.country}
          humidity={this.state.humidity}
          description={this.state.description}
          error={this.state.error} />
      </center>
    );
  }
}

export default App;
