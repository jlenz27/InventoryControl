import React from "react";
import PropTypes from "prop-types";
import Toast from 'react-bootstrap/Toast';

const CoffeeDisplay = (props) => {
  return (
    <React.Fragment>
      <Toast className="mb-4">
      <Toast.Header closeButton={false}>
    <div onClick={() => props.whenCoffeeClicked(props.id)}>
      <p>Coffee Name:  {props.name}</p>
      <p>Cups Left:{props.quantity}/50</p>
    </div>
    </Toast.Header>
    </Toast>
    </React.Fragment>

  );
}

CoffeeDisplay.propTypes = {
  name: PropTypes.string,
  quantity : PropTypes.number

}

export default CoffeeDisplay;