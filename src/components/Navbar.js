import React, {useState} from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import {AiOutlinePlus} from 'react-icons/ai'

 const Navbar = () => {
  const [nav, setNav] = useState(false)

    const handleClick = () => setNav(!nav)

    const handleClose =()=> setNav(!nav)

  return (
    <div className='w-screen h-[80px] z-10 bg-zinc-200 fixed drop-shadow-lg'>
      <div className='px-2 flex justify-between items-center w-full h-full'>
        <div className='flex items-center'>
          <Link to='/' className='w-full text-3xl font-bold sm:text-4xl'>Mishean</Link>
          <ul className='hidden md:flex'>
          <li><Link to='/work' smooth={true} duration={500}>Work</Link></li>
          <li><Link to='/subscribe' smooth={true} offset={-200} duration={500}>Subscribe</Link></li>
          </ul>
        </div>
        <div className='md:hidden mr-4' onClick={handleClick}>
            {!nav ? <AiOutlinePlus className='w-5' /> : <AiOutlinePlus className='w-5' />}
          
        </div>
      </div>

      <ul className={!nav ? 'hidden' : 'absolute bg-zinc-200 w-full px-8'}>
          <li className='border-b-2 border-zinc-300 w-full'><Link onClick={handleClose} to='/work' smooth={true} duration={500}>Home</Link></li>
          <li className='border-b-2 border-zinc-300 w-full'><Link onClick={handleClose} to='/subscribe' smooth={true} offset={-200} duration={500}>About</Link></li>
      </ul>
    </div>
  );
}



export default Navbar


