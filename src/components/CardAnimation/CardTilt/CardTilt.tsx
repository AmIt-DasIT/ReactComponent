import React from 'react'
import VanillaTilt from 'vanilla-tilt';
import './CardTilt.css'


export default function CardTilt() {
      // @ts-ignore
  VanillaTilt.init(document.getElementsByClassName("box")[0], {
    max: 15,
    speed: 200,
    glare: true,
    "max-glare": 0.5,
  });
  return (
    <div className='container'>
        <div className="box"></div>
    </div>
  )
}
