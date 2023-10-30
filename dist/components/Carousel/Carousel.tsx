import React, { useState } from 'react'
import './Carousel.css'

export default function Carousel() {
    const array = ['Item1', 'Item2', 'Item3', 'Item4', 'Item5']
    const [state, setState] = useState(0);

    const plusHandler = () => {
        setState(state => state < array.length - 1 ? state + 1 : 0)
        const car = document.getElementsByClassName('car_box')[0];
        car.classList.add('anima')
    }

    const minusHandler = () => {
        setState(state => state > 0 ? state - 1 : array.length - 1)
    }


    return (
        <div className='car_container'>
            <div className='car_details'>
                <i className="fa-solid fa-circle-arrow-left fa-2xl" onClick={minusHandler}></i>
                <div className='car_box'>{array[state]}</div>
                <i className="fa-solid fa-circle-arrow-right fa-2xl" onClick={plusHandler}></i>
            </div>
        </div>
    )
}
