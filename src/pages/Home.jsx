import React, { useState } from 'react'
import Navbar from '../components/Navbar/Navbar'
import Sidebar from '../components/Sidebar/Sidebar'
import Hero from '../components/Hero/Hero'
import Info from '../components/Info/Info'
import Services from '../components/Services/Services'
import { homeObjOne, homeObjThree, homeObjTwo } from '../components/Info/data'

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
      <Info {...homeObjOne} />
      <Info {...homeObjTwo} />
      <Services />
      <Info {...homeObjThree} />
    </React.Fragment>
  )
}

export default Home