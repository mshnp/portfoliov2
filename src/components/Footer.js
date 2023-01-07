import React from 'react';
import Timer from './Timer';
import {FaCanadianMapleLeaf} from 'react-icons/fa'; 
import { FaGithub } from 'react-icons/fa';
import {EnvelopeIcon} from '@heroicons/react/24/solid';

const Footer = () => {
  return (
    <footer className="sticky top-[100vh] h-16 my-5 flex items-center justify-center">
      <div className='flex flex-col items-center justify-center text-lg w-[300px]'>
        <div className='flex flex-row w-[100px] items-center justify-between mb-1'>
        <a href='https://github.com/mshnp' target="_blank"><FaGithub className='text-[20px]'/></a>
        <a href='https://www.are.na/00015-p' target='_blank' className='text-[20px]'>✶✶</a>
        <a href='mailto:m23006965@proton.me'><EnvelopeIcon className='h-[20px]'/></a>
        </div>
        <div className='flex flex-row text-sm w-[300px] items-center justify-center'> 
          <p>
            Scarborough, ON 
          </p>
          <FaCanadianMapleLeaf className='mx-1 text-[16px]'/>
          <Timer/>
          </div>
      </div>
    </footer>
  )
}

export default Footer
