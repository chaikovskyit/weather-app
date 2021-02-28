import React from 'react';
import moment from 'moment';
import { getImageURL, round } from '../../utils/helpers';

import './hourlyWeatherItem.scss';

const HourlyWeatherItem = ({ hour, icon, temperature }) => (
  <div className="hourly-weather-item swiper-slide">
    {moment.unix(hour).format('LT')}
    <img src={getImageURL(icon, 2)} alt="weather icon" />
    {round(temperature)}
    &#176;
  </div>
);

export default HourlyWeatherItem;
