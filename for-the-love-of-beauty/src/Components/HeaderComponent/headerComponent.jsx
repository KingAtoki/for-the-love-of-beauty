import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import NavigationBar from './Navbar';

class HeaderComponent extends Component {
  render() {
    return (
      <div className="header" style={{ background: 'darkblue' }}>
        <Container fluid={true}>
          <Row>
            <Col xs={{ size: 7, offset: 2 }} md={{ size: 6, offset: 3 }}>
              <h3
                style={{
                  color: 'white',
                  fontStyle: 'oblique',
                  fontFamily: 'cursive',
                  textAlign: 'center',
                  margin: '15px 0px 15px 0px'
                }}
              >
                For The Love of Beauty
              </h3>
            </Col>
            <Col
              xs={{ size: 1, offset: 2 }}
              md={{ size: 3, offset: 0 }}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-end'
              }}
            >
              <NavigationBar />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default HeaderComponent;
