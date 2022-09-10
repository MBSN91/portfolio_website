import React from 'react';
import './navbar.css';
import logo from '../../assets/logo.svg';
import Hamburger from '../../assets/lottie/hamburger/Hamburger'


const Navbar = () => {
  return (
    <nav className='mbsn--nav'>
      <div className='mbsn--nav-container'>
        <div className='mbsn--nav-wrap'>
          <img className='mbsn--logo-nav' src={logo} alt='logo' />
            <div className='nav-list-large'>
              <ul className='nav-names'>
                    <li className='nav-item'>
                      <a class="nav-link" href="#">Home</a>
                    </li>
                    <li className='nav-item'>
                      <a class="nav-link" href="#">Cases</a>
                    </li>
                    <li className='nav-item'>
                      <a class="nav-link" href="#">About</a>
                    </li>
                    <li className='nav-item'>
                      <a class="nav-link" href="#">Contact</a>
                    </li>
              </ul>    
            </div>
            <div className='nav-list-small'>
            <Hamburger />
              <ul className='nav-names-small'>
                    <li className='nav-item'>
                      <a class="nav-link" href="#">Home</a>
                    </li>
                    <li className='nav-item'>
                      <a class="nav-link" href="#">Cases</a>
                    </li>
                    <li className='nav-item'>
                      <a class="nav-link" href="#">About</a>
                    </li>
                    <li className='nav-item'>
                      <a class="nav-link" href="#">Contact</a>
                    </li>
              </ul>    
            </div>
        </div>
      </div>
    </nav>
    
  )
}

export default Navbar