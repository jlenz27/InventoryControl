import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';
import ReusableForm from './ReusableForm';

function NewCoffeeForm(props) {

  function handleAddingNewCoffeeFormSubmission(event) {
    event.preventDefault();
    props.onNewCoffeeCreation({
      name: event.target.name.value || "No Name",
      description: event.target.description.value || "No Description",
      price: event.target.price.value || 0,
      date :event.target.date.value,
      quantity: event.target.quantity.value || 0,
      id: v4()
    });
  }

  return (
    <React.Fragment>
      <ReusableForm
        formSubmissionHandler={handleAddingNewCoffeeFormSubmission}
        buttonText="Add Coffee" />
    </React.Fragment>
  );
}

NewCoffeeForm.propTypes = {
  onNewCoffeeCreation: PropTypes.func
};

export default NewCoffeeForm;