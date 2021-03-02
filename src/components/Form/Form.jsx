import React from 'react';
import './form.scss';

const Form = ({ submitHandler, changeHandler, inputValue }) => {
  const onSubmit = async (e) => {
    e.preventDefault();
    await submitHandler(inputValue);
  };

  return (
    <form className="form input-group mb-3" onSubmit={(e) => onSubmit(e)}>
      <input
        type="text"
        className="form-control"
        placeholder="search city"
        onChange={changeHandler}
      />
      <button
        className="btn btn-outline-secondary"
        type="submit"
      >
        &#128269;
      </button>
    </form>
  );
};

export default Form;
