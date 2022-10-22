import React from 'react'
import s1 from '../assets_images/s1.png';
import s2 from '../assets_images/s2.png';
import s3 from '../assets_images/s3.png';
import s4 from '../assets_images/s4.png';
import a1 from '../assets_images/a1.png';

import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './home.css'
import Vector from '../assets_images/Vector.png';
import CounterUpPage from '../component/CounterUpPage';

import CardGroup from 'react-bootstrap/CardGroup';
import { Divider } from "react";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Announcements from '../component/Announcements';
import News from '../component/News';

import Testimonials from '../component/Testimonials';
import Footer from '../component/Footer';

export default function home() {
  return (
    <React.Fragment>
      <div>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block h-100 w-100"
              src={s3}
              alt="First slide"
            />


          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src={s4}
              alt="Second slide"
            />

            {/* <Carousel.Caption>
          <h3>Second slide label</h3>
          
        </Carousel.Caption> */}
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src={s3}
              alt="Third slide"
            />

            {/* <Carousel.Caption>
          <h3>Third slide label</h3>
         
        </Carousel.Caption> */}
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src={s4}
              alt="Third slide"
            />

            {/* <Carousel.Caption>
          <h3>Third slide label</h3>
         
        </Carousel.Caption> */}
          </Carousel.Item>


        </Carousel>

        <div className='who'>
          <h2>Who are we?</h2>
          

        </div>




        {/* <div className='latest'><Announcements/></div> */}


        <Card className="no" aria-controls="responsive">

          <Card.Body className="no1">
            <Card.Title> CIVF in numbers </Card.Title>
            <Card.Text>

            </Card.Text>

            <img className="Vector1" src={Vector} />
            <img className="Vector2" src={Vector} />
            <img className="Vector3" src={Vector} />
            <img className="Vector4" src={Vector} />

            <CounterUpPage />
          </Card.Body>
        </Card>
      </div>

      <div>

        <Announcements />
        <News />
       <Testimonials />
      </div>

      

      <Footer />

    </React.Fragment>
  );
}
