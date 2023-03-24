import React from 'react'
import './Menu.css'

export default function Menu() {

    const activeHandler = (i: number) => {

        let span = document.querySelectorAll('span');
        let active: any = document.getElementById('active');
        span.forEach((data) => { data.style.color = 'black' });
        active.style.transform = i === 0 ?  `translateX(${ 0  + 'px'})` : `translateX(${span[i].getBoundingClientRect().left - span[0].getBoundingClientRect().left + 'px'})`
        span[i].style.color = 'white';
      }

  return (
    <div className='container'>
      <div className='box'>
        <div className='active' id='active'></div>
        <span onClick={() => activeHandler(0)}>Home</span>
        <span onClick={() => activeHandler(1)}>Gallery</span>
        <span onClick={() => activeHandler(2)}>Profile</span>
        <span onClick={() => activeHandler(3)}>About</span>
        <span onClick={() => activeHandler(4)}>Contact</span>
      </div>
    </div>
  )
}
