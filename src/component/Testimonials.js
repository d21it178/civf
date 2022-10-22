import React from 'react'
import './Testimonials.css'
import Vector1 from '../assets_images/Vector1.png';
import Vector2 from '../assets_images/Vector2.png';
import Carousel from 'react-bootstrap/Carousel';
import t1 from '../assets_images/t1.png';

export default function Testimonials() {
  return (
    <React.Fragment>
      <div  className='test0'>
      <h2 className='text'>Testimonials</h2>
      
        <div className='t1'>
        </div>
        <div className='t' >
          <img className='Vector1' src={Vector1} />
          <img className='Vector2' src={Vector2} />
        </div>
    
      <Carousel className='test'>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={t1}
            alt="First slide"
          />
          <Carousel.Item className='text1'>
            <p >Dream is not that which you see while sleeping, It is something that doesn’t let you sleep.</p>
          </Carousel.Item>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={t1}
            alt="Second slide"
          />

          <Carousel.Item>
            <p className='text1'>Dream is not that which you see while sleeping, It is something that doesn’t let you sleep.</p>
          </Carousel.Item>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={t1}
            alt="Third slide"
          />
          <Carousel.Item>
            <p className='text1'>Dream is not that which you see while sleeping, It is something that doesn’t let you sleep.</p>
          </Carousel.Item>

        </Carousel.Item>
      </Carousel>
      </div>
    </React.Fragment>
  )
}
