import React from 'react';
import './info.scss';

const Info = ({ topStr, bottomStr, withDegSymbol = false }) => (
  <div className="info">
    <div className="info__top">
      {topStr}
      {withDegSymbol && (<span>&#176;</span>)}
    </div>
    <div className="info__bottom">
      {bottomStr}
    </div>
  </div>
);

export default Info;
