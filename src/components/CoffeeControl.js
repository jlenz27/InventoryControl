import React from 'react';
import CoffeeList from './CoffeeList';
import NewCoffeeForm from './NewCoffeeForm';
import CoffeeDetails from './CoffeeDetails';
import EditCoffeeForm from './EditCoffeeForm';
import { v4 } from 'uuid';

class CoffeeControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      mainCoffeeList: [
        {
          name: "Colombian Dark", 
          description: "Colobian Dark Roast from the 2022 harvest", 
          price: 100, 
          quantity: 50, 
          imgUrl: "https://www.pngkey.com/maxpic/u2q8t4t4r5r5e6a9/",
          id: v4()
        }
      ],
      selectedCoffee: null,
      editing: false
    };
  }

  handleClick = () => {
    if (this.state.selectedCoffee != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedCoffee: null
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage
      }));
    }
  }

  handleAddingNewCoffeeToList = (newCoffee) => {
    const newMainCoffeeList = this.state.mainCoffeeList.concat(newCoffee);
    this.setState({mainCoffeeList: newMainCoffeeList, formVisibleOnPage: false});
  }

  handleChangingSelectedCoffee = (id) => {
    const newSelectedCoffee = this.state.mainCoffeeList.filter(coffee => coffee.id === id)[0];
    this.setState({ selectedCoffee: newSelectedCoffee });
  }

  handleDeletingCoffee = (id) => {
    const newMainCoffeeList = this.state.mainCoffeeList.filter(coffee => coffee.id !== id);
    this.setState({mainCoffeeList: newMainCoffeeList, selectedCoffee: null});
  }

  handleEditClick = () => {
    this.setState({editing: true});
  }

  handleEditCoffeeInList = (coffeeToEdit) => {
    const editedMainCoffeeList = this.state.mainCoffeeList.filter(coffee => coffee.id !== this.state.selectedCoffee.id)
      .concat(coffeeToEdit);
    this.setState({mainCoffeeList: editedMainCoffeeList, editing: false, selectedCoffee: null});
  }

  handleUnitSold = () => {
    if (this.state.selectedCoffee.quantity <= 0) {
      return;
    } else {
      const newSelectedCoffee = {...this.state.selectedCoffee, quantity: this.state.selectedCoffee.quantity - 1};
      const editedMainCoffeeList = this.state.mainCoffeeList.filter(coffee => coffee.id !== this.state.selectedCoffee.id)
      .concat(newSelectedCoffee);
      this.setState({selectedCoffee: newSelectedCoffee, mainCoffeeList: editedMainCoffeeList});
    }
  }

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;

    if (this.state.editing) {
      currentlyVisibleState = <EditCoffeeForm 
        coffee={this.state.selectedCoffee} 
        onEditCoffee={this.handleEditCoffeeInList} />
      buttonText = "Return to Coffee List";
    } else if (this.state.selectedCoffee != null) {
      currentlyVisibleState = <CoffeeDetails 
        coffee={this.state.selectedCoffee} 
        onClickingDelete={this.handleDeletingCoffee}
        onClickingEdit={this.handleEditClick}
        onClickingUnitSold={this.handleUnitSold}/>
      buttonText = "Return to Coffee List";
    } else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewCoffeeForm onNewCoffeeCreation={this.handleAddingNewCoffeeToList}/>;
      buttonText = "Return to Coffee List";
    } else {
      currentlyVisibleState = <CoffeeList coffeeList={this.state.mainCoffeeList} onCoffeeSelection={this.handleChangingSelectedCoffee}/>;
      buttonText = "Add Coffee";
    }

    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  };
}

export default CoffeeControl;