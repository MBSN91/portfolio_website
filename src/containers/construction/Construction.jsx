import React from 'react'
import logo from '../../assets/logo.svg';
import './construction.css';

const Construction = () => {
  return (
    <div className='mbsn__container'>
        <img className='logo' src={logo} alt='logo' />
        <p className='paragraph'>website is rebuild from the ground up in React. <br />Portfolio website will be back soon! <br />My old portfolio website can still be access with the button below!</p>
        <button className='button' type='button'>Watch my earlier portfolio</button>
    </div>
  )
}

export default Construction