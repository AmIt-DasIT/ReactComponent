import React from 'react'
import './Clock.css'

export default function Clock() {

    let d1 = new Date();
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const weeks = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    setInterval(() => {
        let d = new Date();
        let hr = d.getHours();
        let min = d.getMinutes();
        let sec = d.getSeconds();
        let hour: any = document.getElementById('hour')
        let minute: any = document.getElementById('minute')
        let second: any = document.getElementById('second')
        hour.style.transform = `rotate(${30 * hr + min / 2}deg)`;
        minute.style.transform = `rotate(${6 * min}deg)`;
        second.style.transform = `rotate(${6 * sec}deg)`;
    }, 1000);
    return (
        <div className="container">
            <div className="box">
                <span></span>
                <span id='hour'></span>
                <span id='minute'></span>
                <span id='second'></span>
                <span style={{ textAlign: 'center', fontWeight: '600' }} contentEditable>
                    {weeks[new Date().getDay()]}
                </span>
            </div>
        </div>
    )
}
