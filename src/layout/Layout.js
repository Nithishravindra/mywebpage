import React from 'react'
import Navbar from '../components/Navbar'

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <h1>Layout</h1>
      {children}
    </>
  )
}

export default Layout
