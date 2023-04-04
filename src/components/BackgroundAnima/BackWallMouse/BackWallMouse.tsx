import React from 'react'
import './BackWallMouse.css'

export default function BackWallMouse() {
    
    const el = document.querySelector("#module") as HTMLElement;
    el !== null && el.addEventListener("mousemove", (e) => {
        el.style.backgroundPositionX = -e.offsetX + "px";
        el.style.backgroundPositionY = -e.offsetY + "px";
    });
    return (
        <div className="module" id="module"></div>
    )
}
