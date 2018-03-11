import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

import HeaderComponent from '../src/Components/HeaderComponent/HeaderComponent';
import CarouselComponent from './Components/CarouselComponent/CarouselComponent';

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      height: 0,
      width: 0
    };
  }
  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions = () => {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  };
  render() {
    return (
      <div className="App">
        <Container fluid={true}>
          <Row>
            <Col>
              <HeaderComponent />
            </Col>
          </Row>

          <Row>
            <Col>
              <CarouselComponent />
            </Col>
          </Row>

          <Row>
            <Col>
              <h1>Main Content will go about here</h1>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
