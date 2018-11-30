import React, { Component } from 'react';
import Header from "../src/components/Header";
import SearchForm from "../src/components/SearchForm";
import Weather from "../src/components/Weather";
import './App.css';

var APIkey = "8b076f5b1b5730cd519b838268d9d96c";


class App extends Component {
  
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
  }

  render() {
    return (
      <center>
        <Header />
        <SearchForm getWeather={this.getWeather}/>
        <Weather />
      </center>
    );
  }
}

export default App;
