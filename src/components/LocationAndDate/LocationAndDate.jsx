import React from 'react';
import './locationAndDate.scss';

const LocationAndDate = ({ city, date, country }) => (
  <div className="location-and-date">
    <div className="location-and-date__city">
      {`${city}, ${country}`}
    </div>
    <div className="location-and-date__date">
      {date}
    </div>
  </div>
);

export default LocationAndDate;
