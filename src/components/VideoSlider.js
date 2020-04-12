import React, { Fragment } from 'react';
// import { Row, Col } from 'reactstrap';
import Carousel from "react-multi-carousel";
import '../styles/video-slider.scss';
import "react-multi-carousel/lib/styles.css";

import VideoItem from './VideoItem';

const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1025 },
      items: 6,
      slidesToSlide: 3,
      partialVisibilityGutter: 15
    },
    desktop: {
      breakpoint: { max: 1024, min: 769 },
      items: 5,
      slidesToSlide: 3,
      partialVisibilityGutter: 20
    },
    tablet: {
      breakpoint: { max: 768, min: 465 },
      items: 4,
      partialVisibilityGutter: 15
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
      partialVisibilityGutter: 10
    }
  };

const VideoSlider = ({listMovies, categoryName}) => {
    return (
      <Fragment>
        <h1 className="slider-title">{categoryName}</h1>
        <Carousel removeArrowOnDeviceType={["tablet"]} partialVisible={true} 
              responsive={responsive} className="video-slider">
                  {
                      listMovies.map(item => <VideoItem movieData={item} key={item._id}/>)
                  }
        </Carousel>
      </Fragment>
    );
}

export default VideoSlider;