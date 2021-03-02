import React from 'react';
import './error.scss';
import error from '../../utils/images/svg/error.svg';

const Error = () => (
  <div className="error">
    <div>
      <div>O..o city not found 😭</div>
      <img className="icon" src={error} alt="error icon" />
    </div>
  </div>
);

export default Error;
