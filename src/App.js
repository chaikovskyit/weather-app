import React, { useEffect, useState } from 'react';
import moment from 'moment';
import LocationAndDate from './components/LocationAndDate/LocationAndDate';
import { getUrlsByCoords, getFormatedWeatherState, round } from './utils/helpers';
import CurrentTemperature from './components/CurrentTemperature/CurrentTemperature';
import CurrentStats from './components/CurrentStats/CurrentStats';

const App = () => {
  const [weather, setWeather] = useState({
    currentWeather: [],
    nextDays: [],
    city: {},
  });

  const getWeather = async (location) => {
    const url = getUrlsByCoords(location);
    // eslint-disable-next-line no-undef
    const res = await fetch(url);
    const data = await res.json();
    setWeather(getFormatedWeatherState(data));
  };

  const getCoordinates = async () => {
    window.navigator.geolocation.getCurrentPosition(getWeather);
  };

  useEffect(() => {
    const getData = async () => {
      await getCoordinates();
    };
    getData();
  }, []);
  // eslint-disable-next-line no-unused-vars
  const { currentWeather, nextDays, city } = weather;
  if (!currentWeather.length) {
    return null;
  }
  const currentData = weather.currentWeather[0];
  const date = moment().format('dddd Do MMMM');
  const { main, weather: weatherData, wind } = currentData;
  const { temp_max: tempMax, temp_min: tempMin, humidity } = main;
  const { sunrise, sunset } = city;
  return (
    <div className="App container">
      <LocationAndDate
        country={city.country}
        city={city.name}
        date={date}
      />
      <div className="row">
        <CurrentTemperature
          temperature={main.temp}
          description={weatherData[0].description}
          icon={weatherData[0].icon}
        />
        <CurrentStats
          hightTemp={round(tempMax)}
          lowTemp={round(tempMin)}
          wind={`${wind.speed} km/h`}
          humidity={`${humidity}%`}
          sunrise={moment.unix(sunrise).format('LT')}
          sunset={moment.unix(sunset).format('LT')}
        />
      </div>
    </div>
  );
};

export default App;
