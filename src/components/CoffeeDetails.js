import React from "react";
import PropTypes from "prop-types";
import Button from 'react-bootstrap/Button';


const CoffeeDetails = (props) => {
  const { coffee, onClickingDelete, onClickingUnitSold,  onClickingEdit } = props;
  
  return (
    <React.Fragment>
      <h1>Coffee Details</h1>
      <hr />
      <h3>{coffee.name}</h3>
      <p>{coffee.description}</p>
      <p>Price: {coffee.price}$</p>
      <p>Cups of Coffee Left: {coffee.quantity} / 50</p>
      <p>Date Purchased: {coffee.date} </p>


      <hr />
      <Button variant="primary" onClick={onClickingUnitSold}>Mark a single cup sold</Button>
      <Button variant="primary" onClick={onClickingEdit}>Update Coffee</Button>
      <Button variant="danger" onClick={() => onClickingDelete(coffee.id)}>Delete A coffee bag</Button>
    </React.Fragment>
  );
}

CoffeeDetails.propTypes = {
  coffee: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func
}

export default CoffeeDetails;