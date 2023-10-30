import React from 'react'
import './LoadingDot.css';

export default function LoadingDot() {
    return (
        <div className="loader">
            <span className="loader__element"></span>
            <span className="loader__element"></span>
            <span className="loader__element"></span>
        </div>
    )
}

