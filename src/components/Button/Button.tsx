import React from 'react'
import './Button.css'

export default function Button() {
    return (
        <div className="container">
            <div style={{ position: 'relative', cursor: 'pointer' }}>
                <div className='btn1'></div>
                <div className='btn'></div>
                <div className='btn__primary'>Button</div>
            </div>
        </div>
    )
}
