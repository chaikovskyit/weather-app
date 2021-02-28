// eslint-disable-next-line import/prefer-default-export
export const getUrlsByCoords = (location) => {
  const { coords } = location;
  const { latitude, longitude } = coords;
  return `http://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&units=metric&appid=${process.env.REACT_APP_WEATHER_API_KEY}`;
};
