import React from 'react'
import './cta.css';

export const Cta = ({
  children
}) => {
  return (
    <button className='mbsn--primary--btn'>
      {children}
    </button>
  )
}

export default Cta