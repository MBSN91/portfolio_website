import React from 'react';
import './navbar.css';
import logo from '../../assets/logo.svg';
import Hamburger from '../../assets/lottie/hamburger/Hamburger'

import { NavLink } from "react-router-dom";


const Navbar = () => {
  return (
    <nav className='mbsn--nav'>
      <div className='mbsn--nav-container'>
        <div className='mbsn--nav-wrap'>
          <img className='mbsn--logo-nav' src={logo} alt='logo' />
            <div className='nav-list-large'>
              <ul className='nav-names'>
                    <li className='nav-item'>
                    <NavLink to='/home' className='nav-link'>Home</NavLink>
                    </li>
                    <li className='nav-item'>
                    <NavLink to='/cases' className='nav-link'>Cases</NavLink>
                    </li>
                    <li className='nav-item'>
                    <NavLink to='/about' className='nav-link'>About</NavLink>
                    </li>
                    <li className='nav-item'>
                    <NavLink to='/contact' className='nav-link'>Contact</NavLink>
                    </li>
              </ul>    
            </div>
            <div className='nav-list-small'>
            <Hamburger /> 
              <ul className='nav-names-small'>
                    <li className='nav-item'>
                    <NavLink to='/home' className='nav-link'>Home</NavLink>
                    </li>
                    <li className='nav-item'>
                      <NavLink to='/cases' className='nav-link'>Cases</NavLink>
                    </li>
                    <li className='nav-item'>
                    <NavLink to='/about' className='nav-link'>About</NavLink>
                    </li>
                    <li className='nav-item'>
                    <NavLink to='/contact' className='nav-link'>Contact</NavLink>
                    </li>
              </ul>    
            </div>
        </div>
      </div>
    </nav>
    
  )
}

export default Navbar