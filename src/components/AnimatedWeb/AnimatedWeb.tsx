import React from 'react'
import './AnimatedWeb.css'

export default function AnimatedWeb() {
    window.addEventListener('scroll', () => {
        let height = window.innerHeight;
        let box = document.getElementsByClassName('box')[0];
        console.log(box.scrollHeight);
        let reveal = 350;
        if (reveal > box.getBoundingClientRect().top) {
            box.className += ' active'
        } else {
            box.classList.remove('active')
        }
    })
    return (
        <div className='container'>
            <div className="box"></div>
        </div>
    )
}
