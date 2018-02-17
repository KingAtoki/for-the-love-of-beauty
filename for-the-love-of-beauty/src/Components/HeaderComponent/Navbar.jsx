import React, { Component } from 'react';
import { Nav, NavItem, Button, Collapse } from 'react-bootstrap';

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
        <Button onClick={() => this.setState({ open: !this.state.open })}>
          click
        </Button>
        <Collapse in={this.state.open}>
          <div>
            <Nav
              bsStyle="pills"
              activeKey={1}
              onSelect={console.log('Pressed')}
            >
              <NavItem eventKey={1} href="/home">
                NavItem 1 content
              </NavItem>
              <NavItem eventKey={2} title="Item">
                NavItem 2 content
              </NavItem>
              <NavItem eventKey={3}>NavItem 3 content</NavItem>
            </Nav>
          </div>
        </Collapse>
      </div>
    );
  }
}

export default NavigationBar;
