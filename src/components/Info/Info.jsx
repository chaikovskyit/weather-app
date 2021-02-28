import React from 'react';
import './info.scss';

const Info = ({
  topStr, bottomStr, withDegSymbol = false, className = 'col-sm-4',
}) => (
  <div className={`info ${className} text-center p-0`}>
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
