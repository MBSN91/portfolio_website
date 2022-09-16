import React from 'react'
import './App.css'
import { Guides } from './components';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components';


import Construction from './pages/construction';
import Home from './pages/home';
import About from './pages/about';
import Cases from './pages/cases';
import Contact from './pages/contact';


const App = () => {
  return (
  <div>
    
        <Routes>
          <Route path='/' exact element={<Construction />} />
          <Route path='/home' exact element={<Home />} />
          <Route path='/cases' element={<Cases />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      <Guides />
  </div>
  )
}

export default App

