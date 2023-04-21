import React from "react";
import PropTypes from "prop-types";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const ReusableForm = (props) => {
  return ( 
 <React.Fragment>
  <Form onSubmit={props.formSubmissionHandler}>
    <Form.Group controlId="name">
      <Form.Label></Form.Label>
      <Form.Control type="text" placeholder="Enter Type of Bean" />
    </Form.Group>

    <Form.Group controlId="description">
      <Form.Label></Form.Label>
      <Form.Control type="text" placeholder="Enter description" />
    </Form.Group>

    <Form.Group controlId="price">
      <Form.Label></Form.Label>
      <Form.Control type="number" placeholder="Price" />
    </Form.Group>

    <Form.Group controlId="date">
      <Form.Label>Purchase Date</Form.Label>
      <Form.Control type="date" placeholder="Enter purchase date" />
    </Form.Group>

    <Form.Group controlId="quantity">
      <Form.Label> </Form.Label>
      <Form.Control type='number'name='quantity' placeholder='Quantity of cups left out of 50 max ' max="50" min="0"/>
    </Form.Group>

    <Button variant="primary" type="submit" style={{margin: '10px'}}>{props.buttonText}</Button>
  </Form>
</React.Fragment>
);
}
    // <React.Fragment>
    //   <form onSubmit={props.formSubmissionHandler}>
    //     <input type='text' name='name' placeholder='Type of Bean' />
    //     <input type='text' name='description' placeholder='Description' />
    //     <input type='number'name='price' placeholder='Price' />
    //     <input type='number'name='quantity' placeholder='Quantity out of 50' max="50" min="0" />
    //     <button type='submit'>{props.buttonText}</button>
    //   </form>
    // </React.Fragment>

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;