import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import NavigationBar from './Navbar';

class HeaderComponent extends Component {
  render() {
    return (
      <div className="header" style={{ background: 'darkblue' }}>
        <Grid fluid={true}>
          <Row>
            <Col xs={2} sm={1}>
              <NavigationBar />
            </Col>
            <Col xs={8} sm={10}>
              <div>
                <h4
                  style={{
                    color: 'white',
                    fontStyle: 'oblique',
                    fontFamily: 'cursive'
                  }}
                >
                  For The Love of Beauty
                </h4>
              </div>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default HeaderComponent;
