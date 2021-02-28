import React from 'react';
import './currentStats.scss';
import Info from '../Info/Info';

const CurrentStats = ({
  hightTemp, lowTemp, wind, sunrise, sunset,
}) => (
  <div className="current-stats col-md-6">
    <div className="d-flex justify-content-around">
      <Info topStr={23} bottomStr="Hight" withDegSymbol />
      <Info topStr={23} bottomStr="Hight" withDegSymbol />
      <Info topStr={23} bottomStr="Hight" withDegSymbol />
    </div>
    <div className="d-flex justify-content-around">
      <Info topStr={23} bottomStr="Hight" withDegSymbol />
      <Info topStr={23} bottomStr="Hight" withDegSymbol />
      <Info topStr={23} bottomStr="Hight" withDegSymbol />
    </div>
  </div>
);

export default CurrentStats;
