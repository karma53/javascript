import React from 'react';
import ReactPlayer from 'react-player';

const App = () => {
  return (
    <ReactPlayer
      className='app'
      controls
      playing
      url='http://start.agmediachandigarh.com/gaundapunjab/tv/playlist.m3u8'
    />
  );
};

export default App;
