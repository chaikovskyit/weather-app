import React from 'react';
import moment from 'moment';
import { getImageURL, round } from '../../utils/helpers';
import './nextDaysWeatherItem.scss';

const NextDaysWeatherItem = ({ hour, icon, temperature }) => (
  <div className="row item">
    <div className="col-4 column">
      {moment.unix(hour).format('ddd Do')}
    </div>
    <div className="col-4 column">
      <img src={getImageURL(icon, 2)} alt="weather icon" />
    </div>
    <div className="col-4 column">
      {round(temperature)}
      &#176;
    </div>
  </div>
);

export default NextDaysWeatherItem;
