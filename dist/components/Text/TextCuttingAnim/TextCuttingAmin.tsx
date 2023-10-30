import React, { } from 'react'
import './TextCuttingAnim.css'

export default function TextCuttingAmin() {
  let count = 0;

  const start = () => {
    setInterval(() => {
      addHandler(array[count]);
      setTimeout(() => {
        sleepHandler();
        removeHandler(array[count]);
        sleepHandler();
        count < array.length - 1 ? count = count + 1 : count = 0;
      }, 3000);
    }, 4000)
  }

  const array = ["Coding", "Confidence", "Frequency", "Activeness", "Awareness"];

  const addHandler = (element: string) => {
    let text: any = document.getElementById('text');
    for (let i = 0; i < element.length; i++) {
      setTimeout(() => {
        text.innerHTML += element.charAt(i);
      }, i * 100)
    }
  }

  const removeHandler = (element: string) => {
    let text: any = document.getElementById('text');
    for (let i = 0; i < element.length; i++) {
      setTimeout(() => {
        text.innerHTML = text.innerHTML.slice(0, text.innerHTML.length - 1);
      }, i * 100)
    }
  }

  const sleepHandler = () => {
    setTimeout(() => {
    }, 500)
  }

  start();

  return (
    <div className='box'>This is <br />
      <span className='text' id='text'></span><span className='blink'>&nbsp;__</span>
    </div>
  )
}
