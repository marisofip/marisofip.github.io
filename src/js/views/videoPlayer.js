import React from 'react';
import ReactPlayer from 'react-player';
//import video2 from "../../../src/videos/audioplay.mp4";

export function VideoPlayer() {
  return (
    <div className='player-wrapper'>
      <ReactPlayer
        className='react-player'
        url={require({hola})}
        width='100%'
        height='100%'
        controls={true}
      />
    </div>
  );
}


