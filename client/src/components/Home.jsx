import React from 'react';
import { Container, Row, Col, Card, Modal, Button } from 'react-bootstrap';
import school from '../assets/school2.png';
import sign from '../assets/sign.png';
import bookfair from '../assets/bookfair.png';
import funday from '../assets/funday.png';
import '../Home.css';

export default function Home() {
  let counter = 0;
  const cardKey = () => counter++;

  return (
    <>
      <Container>
        <Row>
          {' '}
          {/* Change font to something new */}
          <h2>Our Latest News</h2>
        </Row>
        <Row className='row-events'>
          <Col>
            {/* Add cards here */}
            <Card key={cardKey}>
              <Card.Img src={bookfair}></Card.Img>
              <Card.Body>
                <Card.Title>Book Fair</Card.Title>
                <Card.Subtitle>
                  October 2nd-6th, 2023 February 20th-23rd, 2024
                </Card.Subtitle>
                <Card.Subtitle>
                  April (Dates TBD) (Buy 1 Get 1 Free)
                </Card.Subtitle>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card key={cardKey}>
              <Card.Img src={funday}></Card.Img>
              <Card.Body>
                <Card.Title>Funday</Card.Title>
                <Card.Subtitle>November 16th</Card.Subtitle>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card key={cardKey}>
              {/* <Card.Img src={eventImage}></Card.Img> */}
              <Card.Body>
                <Card.Title>Fall Festival</Card.Title>
                <Card.Subtitle>November 16th</Card.Subtitle>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card key={cardKey}>
              {/* <Card.Img src={eventImage}></Card.Img> */}
              <Card.Body>
                <Card.Title>Fall Festival</Card.Title>
                <Card.Subtitle>November 16th</Card.Subtitle>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}
