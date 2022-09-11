import React from 'react';
import './hamburger.css';
import { Player } from '@lottiefiles/react-lottie-player';

import animationData from './animationData.json';

function Hamburger () {
  return (
  <div className='menu'>
    <Player 
        src={animationData}
        autoplay={false}
        loop={false}
        style = {
          {width:'32px', 
          marginRight:'20px'}
        }
        
        
    />
  </div>
)
}

export default Hamburger;
