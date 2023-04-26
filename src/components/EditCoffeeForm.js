import React from "react";
import PropTypes from "prop-types";
import ReusableForm from "./ReusableForm";

const EditCoffeeForm = (props) => {
  const { coffee } = props;

  function handleEditCoffeeFormSubmission(event) {
    event.preventDefault();
    props.onEditCoffee({
      name: event.target.name.value || coffee.name,
      description: event.target.description.value || coffee.description,
      price: event.target.price.value || coffee.price,
      quantity: parseInt(event.target.quantity.value) || coffee.quantity,
      id: coffee.id,
    });
  }

    return (
      <React.Fragment>
        <ReusableForm
          formSubmissionHandler={handleEditCoffeeFormSubmission}
          buttonText="Update Coffee" />
      </React.Fragment>
    );
}

EditCoffeeForm.propTypes = {
  coffee: PropTypes.object,
  onEditCoffee: PropTypes.func
}; 

export default EditCoffeeForm;