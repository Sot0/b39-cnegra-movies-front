import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Media, Row, Col } from 'reactstrap';
import NavTab from '../common/NavTab';
import { Player } from 'video-react';
import '../styles/video-detail.scss';
import Comments from './Comments';

const VideoDetail = ({ modalOpen, toggleModal, movieData }) => {
    const tabList = [
        { text: 'Sinopsis', component: <p className="text sinopsis">{movieData.description}</p> },
        { text: 'Comentarios', component: <Comments comments={movieData.comments}/> }
    ];

    return (
        <Modal isOpen={modalOpen} toggle={toggleModal}  className="video-details" size={'lg'} >
            <ModalHeader toggle={toggleModal}></ModalHeader>
            <Player
                playsInline
                poster={movieData.cover}
                src={movieData.video} />
                <Row className="row-information">
                    <Col sm={3}>
                        <Media src={movieData.cover} className="cover"/>
                    </Col>
                    <Col sm={6} className="col">
                        <p className="text title">{movieData.title}</p>
                        <p className="text created-by">{movieData.created_by}</p>
                    </Col>
                    <Col sm={3} className="like-column">
                        <p className="text">Me gusta</p>
                        <p className="text like-number">{movieData.liked_by? movieData.liked_by.lenght: 0}</p>
                    </Col>
                </Row>
                <NavTab tabList={tabList}></NavTab>    
            <ModalFooter>
                
            </ModalFooter>
        </Modal>
    );
}

export default VideoDetail;