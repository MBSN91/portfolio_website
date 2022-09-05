import React from 'react'
import logo from '../../assets/logo.svg';
import './construction.css';

const Construction = () => {
  return (
    <div className='mbsn__container'>
        <img className='logo' src={logo} alt='logo' />
        <p className='paragraph'>website is rebuild from the ground up in React. <br />Portfolio website will be back soon!</p>
    </div>
  )
}

export default Construction