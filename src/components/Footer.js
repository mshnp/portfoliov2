import React from 'react';
import Timer from './Timer';
import {FaCanadianMapleLeaf} from 'react-icons/fa'; 


const Footer = () => {
  return (
    <footer>
        <p>
        Scarborough, ON <FaCanadianMapleLeaf/> <Timer/>
        </p>
        <a href='https://github.com/mishean' target="_blank">github</a>
        <a href='http://www.linkedin.com/in/mishean-peiris/' target="_blank">LinkedIn</a>
        <a href='https://www.instagram.com/third__________world/' target='_blank'>Instagram</a>
        <a href='https://www.are.na/00015-p' target='_blank'>are.na</a>
        <a href='mailto:misheanpeiris@gmail.com'>Email</a>
    </footer>
  )
}

export default Footer
