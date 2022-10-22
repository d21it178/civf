import React from 'react'
import './Announcements.css'
import Carousel from 'react-bootstrap/Carousel';
import a1 from '../assets_images/a1.png';
import Fade from 'react-reveal/Fade';
import a from '../assets_images/a.png';

export default function Announcements() {
  return (


    <div className='card1' >
      <h3 className='head'>Latest Announcements</h3>
      <div className='conta'>
      <Fade left>
        <div className='aimg' style={{ width: 5, height: 5 }}><img src={a} /></div>
        <Carousel className='ca'>

          <Carousel.Item>
            <h6 className='cat'>The giant leap from lab to market:</h6>
            <p className='cat'>
              Charusat University’s Patent Portfolio is out for
              Commercialization.</p>
            <p className='catb1'>Swati Joshi ON AUGUST 30, 2022</p>
            <img
              className="d-block w-100"
              src={a1}
              alt="First slide"
            />
            <p className='catb2'>Changa, MAY 30, 2022: CIVF</p>
            <p className='cat2'>
              CIVF has launched Patent Commercialization
              Project (PCP) on 17 th August, 2022. Charotar University of Science and
              Technology, Changa has filed 34 Patents till date and the University is
              investing money in filing the patent as well as maintaining them every
              year. But the benefits of the patents are limited to few stakeholders so commercializing them will help in disseminating the Innovation to the world.
            </p>
            <p className='cat3'><h6><b>Key Objectives of Patent Commercialization are:</b></h6>
              <p>  To make the invention accessible to society</p>
              <p>  To empower the inventor</p>
              <p>  To create a circular economy
              </p>
            </p>
          </Carousel.Item>



          <Carousel.Item>
            <h6 className='cat'>The giant leap from lab to market:</h6>
            <p className='cat'> Charusat University’s Patent Portfolio is out for
              Commercialization.</p>
            <p className='catb1'>Swati Joshi ON AUGUST 30, 2022</p>
            <img
              className="d-block w-100"
              src={a1}
              alt="Third slide"
            />
            <p className='catb2'>Changa, MAY 30, 2022: CIVF</p>
            <p className='cat2'>
              CIVF has launched Patent Commercialization
              Project (PCP) on 17 th August, 2022. Charotar University of Science and
              Technology, Changa has filed 34 Patents till date and the University is
              investing money in filing the patent as well as maintaining them every
              year. But the benefits of the patents are limited to few stakeholders so commercializing them will help in disseminating the Innovation to the world.
            </p>
          </Carousel.Item>

        </Carousel>
        </Fade>
      </div>
    </div>

  )
}
