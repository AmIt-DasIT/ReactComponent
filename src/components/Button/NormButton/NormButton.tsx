import React from 'react'
import './NormButton.css'

export default function NormButton() {

    const clickHandler = (e: any) => {
        console.log(e)
        let btn = document.getElementsByClassName('btn')[0];
        let span = document.createElement('span');
        span.style.position = 'absolute';
        console.log(e.clientX)
        span.style.top = `${(e.clientY - btn.getBoundingClientRect().y - 5)}px`;
        span.style.left = `${(e.clientX - btn.getBoundingClientRect().x - 5)}px`;
        span.classList.add('anim');
        btn.appendChild(span);
        setTimeout(() => {
            btn.removeChild(span);
        }, 800)
    }

    return (
        <div className="container">
            <div style={{ position: 'relative', cursor: 'pointer', overflow: 'hidden' }}>
                <div className='btn' id='btn' onClick={clickHandler} >Button</div>
            </div>
        </div>
    )
}
