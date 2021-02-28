export const getUrlsByCoords = (location) => {
  const { coords } = location;
  const { latitude, longitude } = coords;
  return `http://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&units=metric&appid=${process.env.REACT_APP_WEATHER_API_KEY}`;
};

export const getFormatedWeatherState = (weatherData) => {
  const currentWeather = weatherData.slice(0, 8);
  const rest = weatherData.slice(8, weatherData.length);
  const nextDays = rest.filter((obj, i) => i % 8 === 0);
  return { currentWeather, nextDays };
};
