import React from 'react'
import './DragDrop.css'

export default function DragDrop() {
    const dragStart = (e: any) => {
        e.dataTransfer.setData("data", e.target.id);
    };

    const drop = (e: any) => {
        e.target.appendChild(document.getElementById(e.dataTransfer.getData("data")))
    }
    return (
        <div className=''>
            <div className="box" onDrop={drop} onDragOver={(e) => { e.preventDefault() }} draggable></div>
            <div className="box" onDrop={drop} onDragOver={(e) => { e.preventDefault() }} draggable></div>
            <img src={require('../../logo192.png')} id="drag1" alt='' draggable onDragStart={dragStart} />
            <img src={require('../../logo192.png')} id="drag2" alt='' draggable onDragStart={dragStart} />
        </div>
    )
}
