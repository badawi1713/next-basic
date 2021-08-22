import React from 'react'
import { Footer, Navbar } from '..'

const Layout = ({ children }) => {
  return (
    <div className="content">
      <Navbar />
      {children}
      <Footer />
    </div>
  )
}

export default Layout
