import React from 'react'
import './Universe.css'

export default function Universe() {
    return (
        <div className='universe'>
            <div className="sun"></div>
            <div className='budh__path'>
                <div className='budh'></div>
            </div>
            <div className='sukra__path'>
                <div className="sukra"></div>
            </div>
            <div className='earth__path'>
                <i className="fa-solid fa-earth-americas earth fa-xl"></i>
            </div>
        </div>
    )
}
