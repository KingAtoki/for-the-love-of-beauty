import React, { Component } from 'react';
import './Navbar.css';

import {
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';

class NavigationBar extends Component {
  constructor() {
    super();
    this.toggle = this.toggle.bind(this);
    this.state = {
      open: false,
      width: 0,
      height: 0,
      dropdownOpen: false,
      menuItems: ['Home', 'Necklaces', 'Earrings', 'Cart', 'Account']
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

  toggle() {
    console.log('will toggle');
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  render() {
    return this.state.width >= 1000 ? (
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%'
        }}
      >
        {this.state.menuItems.map(menuItem => (
          <div className="MenuItem">{menuItem}</div>
        ))}
      </div>
    ) : (
      <ButtonDropdown
        isOpen={this.state.dropdownOpen}
        toggle={this.toggle}
        direction="left"
      >
        <DropdownToggle caret={false}>Menu</DropdownToggle>
        <DropdownMenu>
          <DropdownItem>Home</DropdownItem>
          <DropdownItem>Necklaces</DropdownItem>
          <DropdownItem>Earrings</DropdownItem>
          <DropdownItem>Cart</DropdownItem>
          <DropdownItem>Account</DropdownItem>
        </DropdownMenu>
      </ButtonDropdown>
    );
  }
}

export default NavigationBar;
