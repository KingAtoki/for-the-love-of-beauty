import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

import HeaderComponent from '../src/Components/HeaderComponent/HeaderComponent';
import CarouselComponent from './Components/CarouselComponent/CarouselComponent';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Grid fluid={true}>
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
              <h1>Main Content will go about here</h1>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default App;
