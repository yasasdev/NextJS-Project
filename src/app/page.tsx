import React from 'react'
import Navbar from './components/Navbar/Navbar'
import HomePage from './pages/HomePage'

const page = () => {
  return (
    <>
      <Navbar />
      <HomePage />
      {/* <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-4xl font-bold">Welcome to My Portfolio</h1>
        <p className="mt-4 text-lg">This is a simple portfolio page.</p>
      </div> */}
    </>
  )
}

export default page