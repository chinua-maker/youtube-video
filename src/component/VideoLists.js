import React from 'react';
import VideoItems from './VideoItems';

const VideoLists = ({videos, onVideoSelect}) => {

  const renderLists = videos.map(video => {
    return <VideoItems 
    key={video.id.videoId}
    video={video} 
    onVideoSelect={onVideoSelect} />
  })

  return (
    <div className='ui relaxed divided list'>
      {renderLists}
    </div>
  )
}

export default VideoLists
