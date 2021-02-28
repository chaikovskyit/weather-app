import React, { useEffect, useState } from 'react';
import { getUrlsByCoords } from './utils/helpers';

const App = () => {
  const [weather, setWeather] = useState({});

  const getWeather = async (location) => {
    const url = getUrlsByCoords(location);
    // eslint-disable-next-line no-undef
    const res = await fetch(url);
    const data = await res.json();
    setWeather(data);
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

  console.log(weather);
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
