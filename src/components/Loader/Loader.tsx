import React from 'react'
import './Loader.css'

export default function Loader() {
    return (
        <div className='container'>
            <div className='loader'>
                <div className='arrow'>
                    <div className='point'></div>
                </div>
                <div className='arrow'>
                    <div className='point1'></div>
                </div>
                <div className='arrow'>
                    <div className='point2'></div>
                </div>
            </div>
        </div>
    )
}
