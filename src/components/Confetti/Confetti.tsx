import React from "react";
import "./Confetti.css";

export default function Confetti() {
  const animation = ["anim", "anim", "anim2"];
  document.onclick = (e) => {
    let body = document.getElementsByClassName("container")[0] as HTMLBodyElement;

    for (let i = 0; i < 500; i++) {
      setTimeout(() => {

        // Box animation
        let box = document.createElement("div");
        box.classList.add('box')
        box.style.top = -100 + "px";
        box.style.left = Math.random() * window.innerWidth + "px";
        box.style.width = "60px";
        box.style.height = "60px";
        
        
        // Span animation
        let span = document.createElement("span");
        span.classList.add("span");
        span.style.background = `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, 1)`;
        span.style.width =Math.floor(Math.random() * (15 - 5 + 1) + 5) + "px";
        span.style.height =Math.floor(Math.random() * (20 - 5 + 1) + 5) + "px";
        span.style.borderRadius =Math.floor(Math.random() * (10 - 1 + 1) + 1) + "px";
        span.style.transform = `rotate(${Math.floor(Math.random() * (20 + 10 + 1) - 10)}deg)`;
        span.classList.add(animation[Math.floor(Math.random() * (4 + 0 + 1) - 0)]);


        // Appending both
        box.appendChild(span);
        body.appendChild(box);
      }, 100 * i);
    }
  };
  return <div></div>;
}
