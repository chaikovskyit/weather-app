import React from 'react';
import './currentStats.scss';
import Info from '../Info/Info';

const CurrentStats = ({
  hightTemp, lowTemp, wind, humidity, sunrise, sunset,
}) => (
  <div className="current-stats col-md-6">
    <div className="row justify-content-center">
      <Info topStr={hightTemp} bottomStr="High" withDegSymbol className="col-2" />
      <Info topStr={wind} bottomStr="Wind" className="col-5" />
      <Info topStr={sunrise} bottomStr="Sunrice" className="col-5" />
    </div>
    <div className="row justify-content-center">
      <Info topStr={lowTemp} bottomStr="Low" withDegSymbol className="col-2" />
      <Info topStr={humidity} bottomStr="Humidity" className="col-5" />
      <Info topStr={sunset} bottomStr="Sunset" className="col-5" />
    </div>
  </div>
);

export default CurrentStats;
