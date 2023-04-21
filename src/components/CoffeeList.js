import React from "react";
import PropTypes from "prop-types";
import CoffeeDisplay from "./CoffeeDisplay";

const CoffeeList = (props) => {
  return (
    <React.Fragment>
      <hr />
      {props.coffeeList.map((coffee) =>
        <CoffeeDisplay
          whenCoffeeClicked={props.onCoffeeSelection}
          name={coffee.name}
          imgUrl={coffee.imgUrl}
          id={coffee.id}
          key={coffee.id}
        />
      )}
    </React.Fragment>
  );
}

CoffeeList.propTypes = {
  coffeeList: PropTypes.array,
  onCoffeeSelection: PropTypes.func
};

export default CoffeeList;