import React from 'react'
import Navbar from './components/Navbar/Navbar'
import HomePage from './pages/HomePage'
import OurServices from './components/OurServices/OurServices'
import OurClients from './components/OurClients/OurClients'
import WhoWeAre from './components/WhoWeAre/WhoWeAre'
import Connect from './components/Connect/ConnectWithUs'

const page = () => {
  return (
    <>
      <Navbar />
      <HomePage />
      <OurServices />
      <OurClients />
      <WhoWeAre />
      <Connect />
    </>
  )
}

export default page