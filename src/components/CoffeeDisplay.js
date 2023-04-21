import React from "react";
import PropTypes from "prop-types";

const CoffeeDisplay = (props) => {
  return (
    <div onClick={() => props.whenCoffeeClicked(props.id)}>
      <img src={props.imgUrl} alt="coffee"/>
      <p>{props.name}</p>
    </div>
  );
}

CoffeeDisplay.propTypes = {
  imgUrl: PropTypes.string,
  name: PropTypes.string
}

export default CoffeeDisplay;