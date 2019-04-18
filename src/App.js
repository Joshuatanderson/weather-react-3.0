import React, { Component } from 'react';

import Header from './Header';
import Input from './Input';
import WeatherBlocks from './WeatherBlocks';

import './style.css';
import 'bulma/css/bulma.css'
import PlaceNames from './PlaceNames';

class App extends Component {
    //initializing state
  state = {
    city: 'oh the places',
    country: 'you\'ll go',
    forecast: Array(7).fill({
      day: {
        avghumidity: '',
        maxtemp_f: '',
        mintemp_f: '',
        condition: {
          icon: ''
        }
      }
    }),
    current: {
      cloud: '',
      gust_mph: '',
      humidity: '',
      temp_f: '',
      condition: {
        text: '',
        icon: ''
      }
    },
    data: undefined,
    currentDay: undefined
  }

  componentWillMount() {
    this.getCurrentDay();
  }

  getData = (e) => {
      //api key
    let key = '2fe2d49a1b7849138f2153622192803';
      //fetches data
    fetch(`https://api.apixu.com/v1/forecast.json?key=${key}&q=${e.target.value}&days=7`)
        //throws error if invalid
      .then((readableStream) => {
        if (readableStream.ok) {
          return readableStream;
        } else{
          throw Error('location not found');
        }
      })
      .then((readableStream) => {
        return (readableStream);
      })
        //turns data to json
      .then((data) => {
        return data.json()
      })
        //sets state
      .then((json) => {
        if(json !== undefined){
          this.setState({
            city: json.location.name,
            country: json.location.country,
            forecast: json.forecast.forecastday,
            current: json.current,
            data: json
          })
        } else return;
      })
      .catch(err => console.log(err))
      this.getCurrentDay();
  }

  getCurrentDay = () => {
    let date = new Date();
    let day = date.getDay();
    this.setState({
      currentDay: day
    })
  }

  getDayOfWeek = (index) => {
      //create array of days
    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
      //get tomorrow index
    let tomorrowIndex = this.state.currentDay + 1;
      //get tomorrow
    let tomorrow = days[tomorrowIndex];
      //get days after tomorrow
    let daysAfter = days.slice(tomorrowIndex);
    let daysBefore = days.slice(0, tomorrowIndex);
    let reOrderedDays = [tomorrow].concat(daysAfter, daysBefore)
      //get days before this.state.currentDay
      //concat currentDay, after, and then Before
    let day = reOrderedDays[index];
    console.log(day);
    return day;
  }
  
    //utility function to display icon only if it is available
  getIcon = (icon) => {
    if(icon){
      return (
          <img className = "image is-96x96" src = {icon} alt = "weather icon"></img>
      )
    }
  }

  render() {
    return (
      <div>
        <Header />
        <div>
          <Input 
            handleChange = {this.getData}
          />

          <PlaceNames 
            city = {this.state.city}
            country = {this.state.country}
          />

          <WeatherBlocks 
            forecast = {this.state.forecast}
            current = {this.state.current}
            getDay = {this.getDayOfWeek}
            getIcon = {this.getIcon}
          />
          
        </div>
        
      </div>
    );
  }
}

export default App;
