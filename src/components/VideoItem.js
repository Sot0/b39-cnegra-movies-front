import React from 'react';

import '../styles/video-item.scss';

const VideoItem = ({movieData}) => {
    const { _id, title, cover, description, created_by } = movieData;
    return (
        <div className="video-item" style={{backgroundImage: `url(${cover})`}}>
        </div>
    );
}
 
export default VideoItem;