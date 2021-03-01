import React from 'react';
import './form.scss';

const Form = ({ changeHandler }) => (
  <form className="form input-group mb-3">
    <input
      type="text"
      className="form-control"
      placeholder="search city"
      onChange={changeHandler}
    />
    <button
      className="btn btn-outline-secondary"
      type="submit"
      // onClick={}
    >
      &#128269;
    </button>
  </form>
);

export default Form;
