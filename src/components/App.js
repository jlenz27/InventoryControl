import Header from './Header';
import React from 'react';
import CoffeeControl from './CoffeeControl';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <React.Fragment>
      <Container>

      <Header />
      <CoffeeControl />
      </Container>
    </React.Fragment>  
  );
}

export default App;