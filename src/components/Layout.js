import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import styled from 'styled-components'
import 'normalize.css'

const 
 Layout = ({children}) => {
  return (
    <Wrapper>
        <Navbar/>
        {children}
        <Footer/>
    </Wrapper>
  )
}

export default Layout

const Wrapper = styled.section`
background: yellow;
margin: 0;
padding: 0;
text-transform: uppercase;
`;