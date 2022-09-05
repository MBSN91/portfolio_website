import React from 'react'
import logo from '../../assets/logo.svg';
import './construction.css';

const Construction = () => {
  return (
    <div className='mbsn__container'>
        <img className='logo' src={logo} alt='logo' />
        <p className='paragraph'>Portfolio is completly rebuild in React. <br />It will be back soon! <br /><p className='p6'>My old portfolio website(backup) is still online</p></p>
        <a href='https://mbsn.webflow.io/'><button className='button' type='button'>Visit my earlier portfolio</button></a>
    </div>
  )
}

export default Construction