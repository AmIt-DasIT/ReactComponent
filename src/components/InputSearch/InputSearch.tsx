import React, { useState } from 'react'
import './InputSearch.css'

export default function InputSearch() {
    const [state, setState] = useState({
        show: false,
        item: ''
    });
    const array = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];

    document.onclick = (e) => {
        // @ts-ignore
        if (!document.getElementById('drop')?.contains(e.target)) {
            setState({ ...state, show: false });
        }
    }

    const searchResult: string[] | undefined = React.useMemo(() => { return array!.filter((s: string) => s.toLowerCase().includes(state.item!.toLowerCase())) }, [state.item]);

    return (
        <div className='drop_container' id='drop'>
            <div className='drop_details' onClick={() => setState({ ...state, show: !state.show })}>
                <input name='user' type='text' className='inputbox' id='inputbox' value={state.item} onChange={(e) => setState({ ...state, item: e.target.value, show: true })} />
                <i className={`fa-solid fa-caret-${state.show ? 'up' : 'down'}`}></i>
            </div>
            {state.show && <div className='drop_data'>
                {searchResult?.map((item) => {
                    return (
                        // @ts-ignore
                        <li onClick={(e) => setState({ ...state, item: e.target.textContent, show: !state.show })} className={`${state.item === item && 'active'}`}>{item}</li>
                    )
                })}
            </div>}
        </div>
    )
}
