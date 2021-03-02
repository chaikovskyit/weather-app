import React from 'react';
import './form.scss';

const Form = ({
  submitHandler, changeHandler, inputValue,
}) => {
  const onSubmit = async (e) => {
    e.preventDefault();
    await submitHandler(inputValue);
  };
  console.log('%cThis is a green text', 'color:green; font-size:50px');
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
