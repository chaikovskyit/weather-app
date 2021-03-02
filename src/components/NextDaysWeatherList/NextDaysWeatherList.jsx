import React from 'react';
import NextDaysWeatherItem from '../NextDaysWeatherItem/NextDaysWeatherItem';

const NextDaysWeatherList = ({ nextDays }) => (
  <div>

    {nextDays.map((item) => {
      const { weather, dt: hour, main } = item;
      return (
        <NextDaysWeatherItem
          icon={weather[0].icon}
          temperature={main.temp}
          hour={hour}
        />
      );
    })}

  </div>
);

export default NextDaysWeatherList;
