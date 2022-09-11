import React from 'react'
import './App.css'
import { Construction } from './containers';
import { Guides } from './components';
import { Navbar } from './components';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';

import Home from './pages/home2';
import About from './pages/about';
import Cases from './pages/cases';
import Contact from './pages/contact';


const App = () => {
  return (
  <div>
    {/* <Router>
        <Navbar />
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/cases' element={<Cases />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </Router> */}  
    <Construction />
    <Guides />
  </div>
  )
}

export default App

