import React, { useEffect, useState } from 'react'
import './Navbar.css'

export default function Navbar() {
    window.addEventListener('scroll', () => {
        let nav: any = document.getElementById('nav__header');
        document.body.scrollTop > 200 || document.documentElement.scrollTop > 200 ? nav.style.top = '0px' : nav.style.top = '-100px'
    })
    const [state, setState] = useState({ show: false });

    // useEffect(() => {
    //     const chatbox = document.getElementById('chatbox') as HTMLElement;
    //     console.log(chatbox);
    //     if (state.show) {
    //         chatbox.style.width = '320px';
    //         chatbox.style.height = '450px';
    //     } else if (chatbox !== null) {
    //             chatbox.style.width = '0px';
    //             chatbox.style.height = '0px';
    //         // chatbox.style.display = 'none';
    //     }
    // }, [state.show])

    document.onclick = (e) => {
        // @ts-ignore
        if (!document.getElementById('drop')?.contains(e.target)) {
            setState({ ...state, show: false });
        }
    }

    return (
        <div className='nav'>
            <div className='nav__header' id='nav__header'>
                <div className='logo'>Home</div>
                <div className="menu">
                    <div>Home</div>
                    <div>Gallery</div>
                    <div>Photos</div>
                    <div>Contact</div>
                    <div>About</div>
                </div>
            </div>
            <div className="chat" id='drop' onClick={() => setState({ ...state, show: !state.show })}>
                <i className="fa-solid fa-comment fa-2xl" style={{ transform: 'rotateY(180deg)' }}></i>
            </div>
            <div className='chat_box' id='chatbox'>
                <input type="text" className='input' />
            </div>
        </div>
    )
}
