import React, { useEffect, useState } from 'react'
import './Ribbon.css'

export default function Ribbon() {
  const [show, setShow] = useState(false);
    useEffect(() => {
    let spanl: any = document.getElementById('spanl');
    let spanr: any = document.getElementById('spanr');
    let imgfollow: any = document.getElementById('imgfollow');
    if (show) {
      spanl.className += ('hide')
      spanr.className += ('hide')
      imgfollow.className += ('hide')
    }
    console.log(document.getElementById('code')?.textContent)
  }, [show])

    return (
        <div className='container'>
            <div className='box' onClick={() => setShow(true)}>
                <span id='spanl'></span>
                <span id='spanr'></span>
                <img src={require('../../logo192.png')} alt='' id='imgfollow' />
            </div>
        </div>
    )
}
