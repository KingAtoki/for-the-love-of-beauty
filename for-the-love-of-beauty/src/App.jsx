import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

import HeaderComponent from '../src/Components/HeaderComponent/HeaderComponent';
import CarouselComponent from './Components/CarouselComponent/CarouselComponent';

import './App.css';

class App extends Component {
  render() {
    const name = { first: 'Chris', last: 'Atoki' };
    return (
      <div className="App">
        <Grid>
          <Row className="show-grid">
            <Col>
              <HeaderComponent />
            </Col>
          </Row>

          <Row className="show-grid">
            <Col>
              <CarouselComponent />
            </Col>
          </Row>

          <Row className="show-grid">
            <Col>
              <h1>
                Hello {name.first} {name.last}!
              </h1>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default App;
