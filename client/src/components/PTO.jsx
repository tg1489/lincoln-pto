import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../PTO.css';

export default function PTO() {
  return (
    <div className='app-container'>
      <div className='content'>
        <h1>PTO Meeting Schedule 2023-2024</h1>

        <Container className='chalkboard'>
          <Row className='line-1'>Test</Row>
        </Container>
      </div>
    </div>
  );
}
