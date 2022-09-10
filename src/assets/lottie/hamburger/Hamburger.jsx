import React from 'react';
import './hamburger.css';
import { Player } from '@lottiefiles/react-lottie-player';

import animationData from './animationData.json';

function Hamburger () {
  return (
  <div className='menu'>
    <Player 
        src={animationData}
        autoplay={true}
        style = {{width:'50px'}}
        loop
        
    />
  </div>
)
}

export default Hamburger;
