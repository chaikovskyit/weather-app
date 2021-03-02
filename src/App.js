import React, { useEffect, useState } from 'react';
import moment from 'moment';
import LocationAndDate from './components/LocationAndDate/LocationAndDate';
import {
  getUrlsByCoords, getFormatedWeatherState, round, getUrlByCityName,
} from './utils/helpers';
import CurrentTemperature from './components/CurrentTemperature/CurrentTemperature';
import CurrentStats from './components/CurrentStats/CurrentStats';
import HourlyWeatherList from './components/HourlyWeatherList/HourlyWeatherList';
import Loader from './components/Loader/Loader';
import Form from './components/Form/Form';
import Error from './components/Error/Error';
import NextDaysWeatherList from './components/NextDaysWeatherList/NextDaysWeatherList';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [value, setValue] = useState(' ');
  const [error, setError] = useState(false);
  const [weather, setWeather] = useState({
    currentWeather: [],
    nextDays: [],
    city: {},
  });

  const getInitialWeather = async (location) => {
    const url = getUrlsByCoords(location);
    const res = await window.fetch(url);
    const data = await res.json();

    setWeather(getFormatedWeatherState(data));
    // setIsLoading(false);
  };

  const getNewWeather = async () => {
    setError(false);
    setIsLoading(true);
    const url = getUrlByCityName(value);
    const res = await window.fetch(url);
    const data = await res.json();
    if (+data.cod === 404) {
      setIsLoading(false);
      setError(true);
      return;
    }
    setWeather(getFormatedWeatherState(data));
    setIsLoading(false);
  };

  const getCoordinates = async () => {
    window.navigator.geolocation.getCurrentPosition(getInitialWeather);
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
      <div className="app-container container">
        <header>
          {!isLoading && !error && (
            <LocationAndDate
              country={city.country}
              city={city.name}
              date={date}
            />
          )}
          <Form
            submitHandler={getNewWeather}
            changeHandler={changeHandler}
            inputValue={value}
          />
        </header>
        {!isLoading && error && (
          <Error />
        )}
        {!isLoading && !error && (
        <div>
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
            <div className="future-weather-container mt-4 w-100 ">
              <p>Todays weather</p>
              <HourlyWeatherList futureWeather={currentWeather} />
            </div>

          </div>
          <NextDaysWeatherList nextDays={nextDays} />
        </div>
        )}
      </div>
    </>
  );
};

export default App;
