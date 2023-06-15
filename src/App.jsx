import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Sidebar from './components/Sidebar/Sidebar'
import { BrowserRouter as Router } from 'react-router-dom'
import Home from './pages/Home'

const App = () => {
  return (
    <Router>
      <Home />
    </Router>
  )
}

export default App