import React from 'react'
import './Button.css'

export default function Button() {

    const clickHandler = (e: any) => {
        console.log(e)
        let btn1 = document.getElementsByClassName('btn1')[0];
        let span = document.createElement('span');
        span.style.position = 'absolute';
        console.log(e.clientX)
        span.style.top = `${(e.clientY - btn1.getBoundingClientRect().y - 5)}px`;
        span.style.left = `${(e.clientX - btn1.getBoundingClientRect().x - 5)}px`;
        span.classList.add('anim');
        btn1.appendChild(span);
        setTimeout(() => {
            btn1.removeChild(span);
        }, 800)
    }

    return (
        <div className="container">
            <div style={{ position: 'relative', cursor: 'pointer' }}>
                <div className='btn1' id='btn1' onClick={clickHandler} ></div>
                <div className='btn'></div>
                <div className='btn__primary'>Button</div>
            </div>
        </div>
    )
}
