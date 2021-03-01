import React, { useEffect, useState } from 'react';
import moment from 'moment';
import LocationAndDate from './components/LocationAndDate/LocationAndDate';
import { getUrlsByCoords, getFormatedWeatherState, round } from './utils/helpers';
import CurrentTemperature from './components/CurrentTemperature/CurrentTemperature';
import CurrentStats from './components/CurrentStats/CurrentStats';
import HourlyWeatherList from './components/HourlyWeatherList/HourlyWeatherList';
import Loader from './components/Loader/Loader';
import Form from './components/Form/Form';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [value, setValue] = useState('');
  console.log(value);

  const [weather, setWeather] = useState({
    currentWeather: [],
    nextDays: [],
    city: {},
  });

  const getWeather = async (location) => {
    const url = getUrlsByCoords(location);
    const res = await window.fetch(url);
    const data = await res.json();

    setWeather(getFormatedWeatherState(data));
    setIsLoading(false);
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

  const { currentWeather, nextDays, city } = weather;

  if (isLoading) {
    return <Loader />;
  }

  const currentData = weather.currentWeather[0];
  const date = moment().format('dddd Do MMMM');
  const { main, weather: weatherData, wind } = currentData;
  const { temp_max: tempMax, temp_min: tempMin, humidity } = main;
  const { sunrise, sunset } = city;

  const changeHandler = (e) => {
    setValue(e.target.value);
  };

  return (
    <>
      <div className="app-container">
        <Form changeHandler={changeHandler} />
        {!isLoading && (
        <div>
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
            <div className="future-weather-container mt-4 w-100 container">
              <p>Todays weather</p>
              <HourlyWeatherList futureWeather={currentWeather} />
            </div>

          </div>
        </div>
        )}
      </div>
    </>
  );
};

export default App;
