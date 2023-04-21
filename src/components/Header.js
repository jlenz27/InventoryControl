import React from "react";
import coffeeRoasters from "./../img/coffeeRoasters.jpg"

function Header(){
  const headerStyles = {
    textAlign: "right",
    padding: 30,
    margin: 5,
    backgroundImage:`url(${coffeeRoasters})`,
    backgroundSize: "100%",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center top 35%",
    color: "white",
    boxShadow: "0 2px 5px rgba(0,0,0,0.3)"
  }

  return(

    <React.Fragment>
      <div style={headerStyles}>
      <h1>The Coffee Roasters</h1>
      <h5>Keep Track of your Coffee</h5>
      </div>
      <br />
    </React.Fragment>

  );
}

export default Header;