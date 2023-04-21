import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';
import ReusableForm from './ReusableForm';

function NewCoffeeForm(props) {

  function handleAddingNewCoffeeFormSubmission(event) {
    event.preventDefault();
    props.onNewCoffeeCreation({
      name: event.target.name.value || "No Name",
      imgUrl: event.target.imgUrl.value || "https://www.pngkey.com/maxpic/u2q8t4t4r5r5e6a9/",
      description: event.target.description.value || "No Description",
      price: event.target.price.value || 0,
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