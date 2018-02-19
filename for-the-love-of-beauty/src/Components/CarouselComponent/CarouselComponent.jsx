import React, { Component } from 'react';

import ftlob_logo from '../../assets/ftlob_logo.JPG';
import three_diamonds_logo from '../../assets/three_diamonds.JPG';

import { Carousel, Grid, Row, Col } from 'react-bootstrap';

class CarouselComponent extends Component {
  render() {
    return (
      <Grid fluid={true}>
        <Row>
          <Col>
            <Carousel>
              <Carousel.Item>
                <div style={{ height: '200px' }}>
                  <img
                    width={300}
                    height="100%"
                    alt="900x500"
                    src={ftlob_logo}
                  />
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div style={{ height: '200px' }}>
                  <img
                    width={300}
                    height="100%"
                    alt="900x500"
                    src={three_diamonds_logo}
                  />
                </div>
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default CarouselComponent;
