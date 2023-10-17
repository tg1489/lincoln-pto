import React from 'react';
import { Container, Row, Col, Card, Modal, Button } from 'react-bootstrap';
import school from '../assets/school2.png';
import sign from '../assets/sign2.png';
import bookfair from '../assets/bookfair.png';
import funday from '../assets/funday.png';
import '../Home.css';

export default function Home({ isMobile }) {
  let counter = 0;
  const cardKey = () => counter++;

  return (
    <>
      <Container>
        <Row className={isMobile ? 'mobile-columns' : ''}>
          <div className={`mt-5 mb-5 ${isMobile ? 'col' : 'col-6'}`}>
            <img src={sign} className='main-picture' />
          </div>
          <div className={isMobile ? 'col' : 'col-6'}>
            <h6>LINCOLN ELEMENTARY'S P.T.O.</h6>
            <p>
              On behalf of the Lincoln Elementary PTO, welcome to the 2023-2024
              school year!{' '}
            </p>
            <p>
              For those of you who are new to Lincoln, we are looking forward to
              meeting you and helping you become a part of the school community!
              Together we can show our children that they are valued and loved
              by providing them with a fun-filled and enriching year.
            </p>
            <p>
              For those returning parents, we thank you for your ongoing support
              without which we would not be able to continue to provide a
              supportive and positive environment for our students. The ability
              of our PTO to supplement our children’s day-to-day instruction is
              a result of the commitment and efforts of ALL its members, and we
              simply cannot do it without you.
            </p>
          </div>
        </Row>
        <Row className='mt-1'>
          <h2 className='latest-news-title'>Our Latest News</h2>
        </Row>
        <Row className={`row-events mt-1 ${isMobile ? 'mobile-columns' : ''}`}>
          <Col className='mb-4'>
            {/* Add cards here */}
            <Card key={cardKey}>
              <Card.Img src={bookfair}></Card.Img>
              <Card.Body>
                <Card.Title>Book Fair</Card.Title>
                <Card.Subtitle>February 20th-23rd, 2024</Card.Subtitle>
                <Card.Subtitle>
                  April (Dates TBD) (Buy 1 Get 1 Free)
                </Card.Subtitle>
              </Card.Body>
            </Card>
          </Col>
          <Col className='mb-4'>
            <Card key={cardKey}>
              <Card.Img src={funday}></Card.Img>
              <Card.Body>
                <Card.Title>Funday</Card.Title>
                <Card.Subtitle>Dates (TBD)</Card.Subtitle>
                <Card.Text>Click to volunteer for Funday</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}
