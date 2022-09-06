import React from 'react'
import logo from '../../assets/logo.svg';
import './construction.css';
import Cta from '../../components/cta/Cta';


const Construction = () => {
  return (
    <div className='mbsn--container'>
      <div className='box'>
        <div className='boxje1' />
        <div className='boxje2' />
        <div className='boxje3' />
        <div className='boxje4' />
        <div className='mbsn--box'>
          <img className='mbsn--logo' src={logo} alt='logo' />
          <p className='mbsn--paragraph'>Portfolio is being rebuild from scratch <br />It will be back soon! <br /><p className='p6'>My old portfolio website(backup) is still online</p></p>
          <a href='https://mbsn.webflow.io/'>
            <Cta>visit my backup portfolio</Cta>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Construction 