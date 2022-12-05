import React from 'react'
import { Link } from 'gatsby'

const Dropdown = () => {
  return (
    <div className='md:hidden'>
        <div className='absolute flex flex-col items-center self-end hidden sm:w-auto sm:self-center'>
            <Link to='/work'>Work</Link>
            <Link to='/subscribe'>Subscribe</Link>
        </div>
    </div>
  )
}

export default Dropdown