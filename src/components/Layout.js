import React from 'react'
import Footer from './Footer'
import 'normalize.css'
import Header from './Header'

const Layout = ({children}) => {
  return (
    <>
    <body className='text-transform: uppercase'>
        <Header/>
        {children}
        <Footer/>
    </body>    
    </>
  )
}


export default Layout

