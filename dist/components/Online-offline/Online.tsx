import React from 'react'

export default function Online() {
    console.log()
    window.addEventListener('online', () => {
        let span: any = document.getElementById('span');
        span.style.backgroundColor = 'green';
    })

    window.addEventListener('offline', () => {
        let span: any = document.getElementById('span');
        span.style.backgroundColor = 'red';
    })
    return (
        <div className='container'>
            <span style={{width: '50px', height: '50px', borderRadius: '50%', backgroundColor: `${navigator.onLine ? 'green' : 'red'}`}} id='span'></span>
        </div>
    )
}
