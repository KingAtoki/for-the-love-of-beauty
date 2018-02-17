import React, { Component } from 'react';

import ftlob_logo from '../../assets/ftlob_logo.JPG';
import three_diamonds_logo from '../../assets/three_diamonds.JPG';

import { Carousel } from 'react-bootstrap';

class CarouselComponent extends Component {
  render() {
    return (
      <Carousel>
        <Carousel.Item>
          <img width={500} height={100} alt="900x500" src={ftlob_logo} />
        </Carousel.Item>
        <Carousel.Item>
          <img
            width={500}
            height={300}
            alt="900x500"
            src={three_diamonds_logo}
          />
        </Carousel.Item>
      </Carousel>
    );
  }
}

export default CarouselComponent;
