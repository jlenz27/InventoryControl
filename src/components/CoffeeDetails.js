import React from "react";
import PropTypes from "prop-types";

const CoffeeDetails = (props) => {
  const { coffee, onClickingDelete, onClickingUnitSold,  onClickingEdit } = props;
  
  return (
    <React.Fragment>
      <h1>Coffee Details</h1>
      <hr />
      <img src={coffee.imgUrl} alt="coffee"/>
      <h3>{coffee.name}</h3>
      <p>{coffee.description}</p>
      <p>Price: {coffee.price}$</p>
      <p>Cups of Coffee Left: {coffee.quantity} / 50</p>
      <hr />
      <button onClick={onClickingUnitSold}>Mark a single cup sold</button>
      <button onClick={() => onClickingDelete(coffee.id)}>Delete A coffee bag</button>
      <button onClick={onClickingEdit}>Update Coffee</button>
    </React.Fragment>
  );
}

CoffeeDetails.propTypes = {
  coffee: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func
}

export default CoffeeDetails;