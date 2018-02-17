import React, { Component } from 'react';
import {
  Navbar,
  Nav,
  NavDropdown,
  NavItem,
  MenuItem,
  FormGroup,
  FormControl,
  Button
} from 'react-bootstrap';

function handleSelect(selectedKey) {
  alert(`selected ${selectedKey}`);
}

class NavigationBar extends Component {
  render() {
    return (
      <Nav bsStyle="pills" activeKey={1} onSelect={handleSelect}>
        <NavItem eventKey={1} href="/home">
          NavItem 1 content
        </NavItem>
        <NavItem eventKey={2} title="Item">
          NavItem 2 content
        </NavItem>
        <NavItem eventKey={3}>NavItem 3 content</NavItem>
      </Nav>
    );
  }
}

export default NavigationBar;
