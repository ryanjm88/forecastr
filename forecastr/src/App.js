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
    error: undefined,
    zip: undefined
  }

  getWeather = async (event) => {
    event.preventDefault();

    const cityName = event.target.elements.city.value;
    const zipName = event.target.elements.zipCode.value;

    const apiCallCity = await fetch(`https://api.openweathermap.org/data/2.5/weather?&q=${cityName}&apikey=${APIkey}&units=imperial`);
    const apiCallZip = await fetch(`https://api.openweathermap.org/data/2.5/weather?&zip=${zipName}&apikey=${APIkey}&units=imperial`);

    var dataCity = await apiCallCity.json();
    var dataZip = await apiCallZip.json();
    console.log(dataCity);
    console.log(dataZip);

    dataCity = dataCity.cod !== '400' ? dataCity : null;
    dataZip = dataZip.cod !== '400' ? dataZip : null;

    if (dataCity) {
      var tempa1 = Math.round(dataCity.main.temp)
    }

    if (dataZip) {
      var tempa2 = Math.round(dataZip.main.temp)
    }

    this.setState(
      {
        temperature: (tempa1 || tempa2) + " °F",
        city: (dataCity || dataZip).name,
        // country: dataCity.sys.country,
        humidity: "Humidity: " + (dataCity || dataZip).main.humidity + "%",
        description: (dataCity || dataZip).weather[0].description,
        error: "",
        // zip: !isNaN(parseInt(zipName)) ? parseInt(zipName) : null
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
          error={this.state.error}
          zip={this.state.zip}
        />
      </center>
    );
  }
}

export default App;
