// src/components/VideoCard/VideoCard.js
import React from 'react';
import './VideoCard.css';

const VideoCard = ({ imageUrl, linkUrl, title }) => {
  return (
    <div className="video-card">
      <a href={linkUrl} target="_blank" rel="noopener noreferrer">
        <img src={imageUrl} alt={title} />
      </a>
      <p>{title}</p>
    </div>
  );
};

export default VideoCard;
