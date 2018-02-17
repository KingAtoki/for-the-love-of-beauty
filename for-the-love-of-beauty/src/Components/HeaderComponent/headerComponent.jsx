import React, { Component } from 'react';

import NavigationBar from './Navbar';

class HeaderComponent extends Component {
  render() {
    return (
      <div className="header">
        <NavigationBar />
        <h2>Hello I am the header!</h2>
      </div>
    );
  }
}

export default HeaderComponent;
