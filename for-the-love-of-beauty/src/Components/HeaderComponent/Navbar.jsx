import React, { Component } from 'react';
import { Button, Glyphicon } from 'react-bootstrap';

class NavigationBar extends Component {
  constructor() {
    super();

    this.state = {
      open: false
    };
  }
  render() {
    return (
      <div>
        <Button
          style={{
            backgroundColor: 'darkblue',
            border: '0px',
            paddingTop: 10
          }}
          onClick={() => console.log('clicked')}
        >
          <Glyphicon
            glyph="menu-hamburger"
            style={{
              color: 'white'
            }}
          />
        </Button>
      </div>
    );
  }
}

export default NavigationBar;
