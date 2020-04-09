import React, { Fragment } from 'react';
import { Row, Col } from 'reactstrap';
import Carousel from "react-multi-carousel";
import '../styles/video-slider.scss';
import "react-multi-carousel/lib/styles.css";

import VideoItem from './VideoItem';

const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
      slidesToSlide: 3,
      partialVisibilityGutter: 15
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
      slidesToSlide: 3,
      partialVisibilityGutter: 10
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 4,
      partialVisibilityGutter: 15
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 3,
      partialVisibilityGutter: 10
    }
  };

const VideoSlider = ({data, categoryName = 'Fantasía'}) => {
    return (
      <Fragment>
      <Carousel removeArrowOnDeviceType={["tablet", "mobile"]} partialVisible={true} 
              responsive={responsive} className="video-slider">
                  {
                      data.getMovies.map(item => <VideoItem movieData={item} key={item._id}/>)
                  }
              </Carousel>
      </Fragment>
    );
}

const CustomLeftArrow = () => {
  return <i className="fas fa-arrow-alt-circle-left" style={{color:'var(--white)', fontSize: '2rem', position: 'absolute', right:'1rem'}}></i>
};

export default VideoSlider;