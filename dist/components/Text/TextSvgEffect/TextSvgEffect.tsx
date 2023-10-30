import React from 'react'
import './TextSvgEffect.css'

export default function TextSvgEffect() {
    return (
        <svg viewBox="0 0 960 300">
            <symbol id="a">
                <text text-anchor="middle" x="50%" y="50%">Amit</text>
            </symbol>
            <g>
                <use href="#a" className="text-copy" />
                <use href="#a" className="text-copy" />
                <use href="#a" className="text-copy" />
                <use href="#a" className="text-copy" />
                <use href="#a" className="text-copy" />
            </g>
        </svg>

    )
}
