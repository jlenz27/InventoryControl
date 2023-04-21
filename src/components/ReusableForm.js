import React from "react";
import PropTypes from "prop-types";

const ReusableForm = (props) => {
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <input type='text' name='name' placeholder='Type of Bean' />
        <input type='text' name='description' placeholder='Description' />
        <input type='number'name='price' placeholder='Price' />
        <input type='number'name='quantity' placeholder='Quantity out of 50' max="50" min="0" />
        <button type='submit'>{props.buttonText}</button>
      </form>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;