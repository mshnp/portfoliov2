import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

 const Navbar = () => {
  return (
    <Nav>
        <NavLink to='/'>Mishean</NavLink>
        <NavLink to='/work'>Work</NavLink>
        <NavLink to='/subscribe'>Subscribe</NavLink>
    </Nav>
  )
}
const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 4rem; 
  z-index: 10;
  width: 100%;
`;

const NavLink = styled(Link) `
    color: #000;
    display: flex;
    align-items: center;
    padding: 0 1rem;
    height : 100%;
    text-decoration: none;
`




export default Navbar
