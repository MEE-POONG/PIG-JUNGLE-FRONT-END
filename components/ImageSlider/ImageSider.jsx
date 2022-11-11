import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel'

export default function ImageSider({ show, image, handleClose }) {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
    return (
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item style={{ height: 600}}>
          <img
            className="d-block w-100"
            src="https://media.cnn.com/api/v1/images/stellar/prod/220827155916-marijuana-polling-tobacco-cigarettes-trump-search.jpg?c=original"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>รูป 1</h3>
            <p>รายละเอียดรูป 1</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={{ height: 600}}>
          <img
            className="d-block w-100"
            src="https://gray-kptv-prod.cdn.arcpublishing.com/resizer/lM2_r1s4lA9iTnoMQ5iH9mpwo2g=/1200x675/smart/filters:quality(85)/cloudfront-us-east-1.images.arcpublishing.com/gray/GHYFGWKYW5CMRHTINQDDFCN7CI.jpg"
            alt="Second slide"
          />
  
          <Carousel.Caption>
            <h3>รูป 2</h3>
            <p>รายละเอียดรูป 2</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={{ height: 600}}>
          <img
            className="d-block w-100"
            src="https://hips.hearstapps.com/amv-prod-gp.s3.amazonaws.com/gearpatrol/wp-content/uploads/2020/04/Weed-Terms-Gear-Patrol-Lead-Full.jpg"
            alt="Third slide"
          />
  
          <Carousel.Caption>
            <h3>รูป 3</h3>
            <p>รายละเอียดรูป 3</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
}