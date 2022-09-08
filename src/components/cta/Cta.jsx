import React from 'react'
import './cta.css';
import arrow from '../../assets/arrow.svg'

export const Cta = ({
  children
}) => {
  return (
    <button className='mbsn--primary--btn'>
      {children} <img className='arrow' src={arrow} alt='arrow pointing right' />
    </button>
  )
}

export default Cta