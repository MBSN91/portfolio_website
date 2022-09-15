import React from 'react'
import logo from '../../assets/logo.svg';
import musa from '../../assets/musa-baysan.png'
import indicate from '../../assets/indicate.svg'
import './construction.css';
import Cta from '../../components/cta/Cta';


const Construction = () => {
  return (
    <div className='mbsn--container'>
      <div className='box'>
        <img className='mbsn--selfie' src={musa} alt='musabaysan' />
        <div className='little-box ne' />
        <div className='little-box nw' />
        <div className='little-box se' />
        <div className='little-box sw' />
        <div className='mbsn--box'>
          <img className='mbsn--logo' src={logo} alt='logo' />
          <p className='mbsn--paragraph'>Portfolio is being rebuild from scratch <br />It will be back soon!</p>
          <div className='mbsn--btnannounce'><a href='https://mbsn.webflow.io/'>
            <Cta>visit my backup portfolio</Cta>
          </a><div className='mbsn--announce'>My old portfolio website is still online!</div></div>
      </div>
      <img className='mbsn--indicate' src={indicate} alt='indication' />
    </div>
    </div>
  )
}

export default Construction 