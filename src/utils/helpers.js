export const getUrlsByCoords = (location) => {
  const { coords } = location;
  const { latitude, longitude } = coords;

  return `http://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&units=metric&appid=${process.env.REACT_APP_WEATHER_API_KEY}`;
};

export const getFormatedWeatherState = (weatherData) => {
  const { list, city } = weatherData;
  const currentWeather = list.slice(0, 8);
  const rest = list.slice(8, list.length);
  const nextDays = rest.filter((obj, i) => i % 8 === 0);
  return { currentWeather, nextDays, city };
};

export const getImageURL = (id, scale = 4) => `http://openweathermap.org/img/wn/${id}@${scale}x.png`;

export const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

export const round = (number) => Math.floor(+number);

export const getWeatherByCityName = async (value) => {
  const apiURL = await
  window.fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${value}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`);
  const dataByCityName = await apiURL.json();
};
