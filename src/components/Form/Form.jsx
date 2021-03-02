import React from 'react';
import './form.scss';

const Form = ({
  submitHandler, changeHandler, inputValue,
}) => {
  const onSubmit = async (e) => {
    e.preventDefault();
    await submitHandler(inputValue);
  };

  return (
    <form className="search-form mb-3" onSubmit={(e) => onSubmit(e)}>
      <input
        type="text"
        className="search-form__input"
        placeholder="search city"
        onChange={changeHandler}
      />
      <button
        className="search-form__button"
        type="submit"
      >
        &#128269;
      </button>
    </form>
  );
};

export default Form;
