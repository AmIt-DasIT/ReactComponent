import React, { useState } from 'react'
import './Dropdown.css'

export default function Dropdown() {
    const [state, setState] = useState({
        show: false,
        item: ''
    })
    const array = ['Item 1', 'Item 2', 'Item 3', 'Item 4']

    document.onclick = (e) => {
        // @ts-ignore
        if (!document.getElementById('drop')?.contains(e.target)) {
            setState({ ...state, show: false })
        }
    }

    return (
        <div className='drop_container' id='drop'>
            <div className='drop_details' onClick={() => setState({ ...state, show: !state.show })}>
                <div>{state.item ? state.item : 'Select an option'}</div>
                <i className={`fa-solid fa-caret-${state.show ? 'up' : 'down'}`}></i>
            </div>
            {state.show && <div className='drop_data'>
                {array.map((item, index) => {
                    return (
                        // @ts-ignore
                        <li onClick={(e) => setState({ ...state, item: e.target.textContent, show: !state.show })} className={`${state.item === item && 'active'}`}>{item}</li>
                    )
                })}
            </div>}
        </div>
    )
}
