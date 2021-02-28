import React, { useEffect, useState } from 'react';
import { getUrlsByCoords, getFormatedWeatherState } from './utils/helpers';

const App = () => {
  const [weather, setWeather] = useState({});

  const getWeather = async (location) => {
    const url = getUrlsByCoords(location);
    // eslint-disable-next-line no-undef
    const res = await fetch(url);
    const data = await res.json();
    setWeather(getFormatedWeatherState(data.list));
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

  return (
    <div className="App">
      {weather.list && weather.list.map((w) => (
        <pre>
          {JSON.stringify(w, null, 2)}
        </pre>
      ))}
    </div>
  );
};

export default App;
