import React, { Fragment, useState } from 'react';
import {
  Card, CardImg, CardBody,
  CardTitle, CardSubtitle
} from 'reactstrap';

import '../styles/video-item.scss';
import VideoDetail from './VideoDetail';

const VideoItem = ({movieData}) => {
  const [modalOpen, setModalOpen] = useState(false);

  const toggleModal = () => setModalOpen(!modalOpen);

  return (
    <Fragment>
      <Card className="video-item" onClick={toggleModal}>
        <CardImg top src={movieData.cover} alt={movieData.title} className="card-image"/>
        <CardBody>
          <CardTitle>{movieData.title}</CardTitle>
          <CardSubtitle>{movieData.created_by}</CardSubtitle>
        </CardBody>
      </Card>
      <VideoDetail modalOpen={modalOpen} toggleModal={toggleModal} movieData={movieData}/>
    </Fragment>
  );
};

export default VideoItem;