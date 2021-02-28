import React from 'react';
import { getImageURL, capitalize, round } from '../../utils/helpers';
import './currentTemperature.scss';

const CurrentTemperature = ({ icon, temperature, description }) => (
  <div className="current-temperature col-md-6">
    <img src={getImageURL(icon, 4)} alt="weather icon" />
    <div className="current-temperature__info">
      <div className="current-temperature__temperature">
        {round(temperature)}
        &#176;
      </div>
      <div>{capitalize(description)}</div>
    </div>
  </div>
);

export default CurrentTemperature;
