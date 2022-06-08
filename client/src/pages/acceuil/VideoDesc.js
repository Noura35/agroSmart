import React from 'react';
import videoBg from './assets/videoBg.mp4'


const VideoDesc = () => {
  return (  
        <div className='main'>
        <video src={videoBg} autoPlay loop />      
      </div>  
  
  )
}

export default VideoDesc
