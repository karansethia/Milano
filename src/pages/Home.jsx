import React, { useState } from 'react'
import Navbar from '../components/Navbar/Navbar'
import Sidebar from '../components/Sidebar/Sidebar'
import Hero from '../components/Hero/Hero'

const Home = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleHandler = () => {
    setIsOpen(!isOpen);
  }

  return (
    <React.Fragment>
      <Sidebar isOpen={isOpen} toggle={toggleHandler} />
      <Navbar toggle={toggleHandler} />
      <Hero />
    </React.Fragment>
  )
}

export default Home