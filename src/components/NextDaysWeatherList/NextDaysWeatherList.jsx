import React from 'react';
import NextDaysWeatherItem from '../NextDaysWeatherItem/NextDaysWeatherItem';

const NextDaysWeatherList = ({ nextDays }) => (
  <>
    {nextDays.map(({ weather, dt: hour, main }) => (
      <NextDaysWeatherItem
        icon={weather[0].icon}
        temperature={main.temp}
        hour={hour}
        key={hour}
      />
    ))}
  </>
);

export default NextDaysWeatherList;
