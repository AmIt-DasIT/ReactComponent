import React, { useState } from 'react'
import './BoardSwitch.css'

export default function BoardSwitch() {
    const [state, setState] = useState(false);
    const handleClick = () => {
        setState(!state);
    }

    let ball: any = document.getElementById('ball');
    if (ball) {
        ball.style.transition = '0.3s';
        if (state) {
            ball.style.backgroundColor = `#ffc400`;
            ball.style.boxShadow = 'none';
        } else {
            ball.style.backgroundColor = `transparent`;
            ball.style.boxShadow = 'inset 2px -2px 0 1.8px #fff';
        }
        state ? ball.classList.add('toggle') : ball.classList.add('toggle_f');
        setTimeout(() => {
            state ? ball.classList.remove('toggle_f') : ball.classList.remove('toggle');
        }, 10);
    }

    return (
        <div className='box'>
            <div className="switch" onClick={handleClick}>
                {<div className="ball" id='ball'></div>}
            </div>
        </div>
    )
}
