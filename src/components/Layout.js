import React from 'react'
import Navbar from './Navbar'
import './layout.css'
import { Helmet } from "react-helmet"

const Layout = ({children}) => {
return (
  <>
  <Helmet>
    <title>Gatsby Test</title>
  </Helmet>
  <Navbar />
  <main>
    {children}
  </main>
  </>
)
}

export default Layout
