import React, {useState} from 'react'
import {PlusIcon} from '@heroicons/react/24/solid'
import {MinusIcon} from '@heroicons/react/24/solid'
import { Link } from 'gatsby'

const Header = () => {
   
    const [nav, setNav] = useState(false)

    const handleClick = () => setNav(!nav)

    const handleClose =()=> setNav(false)

  return (
    <>
   <header className='sticky top-0 z-50 bg-white'>
    <div className='flex text-2xl items-center justify-between h-16 relative max-w-6xl lg:mx-auto'>
    {/* left */}
    <Link to='/' className='pl-5 select-none' onClick={handleClose}> 
        Mishean
    </Link>

    <Link to='/work' className='hidden md:flex'> 
        Work
    </Link>
        
     {/* right */}
    <Link to='/subscribe' className='hidden md:flex pr-5'> 
        Subscribe
    </Link>
    
    {/* Hamburger */}
   
    <div className='cursor-pointer pr-5 flex md:hidden' onClick={handleClick}>
       {!nav ? <PlusIcon className = 'h-8'/> : <MinusIcon className = 'h-8'/>}
    </div>
   
    </div>
    </header>
    <div className={nav ? 'overflow-y-scroll justify-center z-10 md:hidden ease-in duration-300 fixed top-0 bottom-0 left-0 right-0 bg-white/90 w-screen flex flex-col items-center': 'flex fixed top-0 h-screen left-[-100%] ease-in duration-300'}>
            <Link className='select-none p-5 text-xl'  to='/work'>Work</Link>
            <Link className='select-none p-5 text-xl' to='/subscribe'>Subscribe</Link>
    </div> 
   </>
  )
}

export default Header


