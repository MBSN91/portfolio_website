import React from 'react'
import './App.css'
import { Construction } from './containers';
import { Guides } from './components';
import { Navbar } from './components';


const App = () => {
  return (
  <div>
    <Construction />
    <Guides />
  </div>
  )
}

export default App