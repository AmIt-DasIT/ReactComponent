import React from "react";
import "./Practice.css";

export default function Practice() {
  window.addEventListener("mousemove", (e) => {
    const cursor: any = document.getElementById("cursor");
    console.log(cursor.getBoundingClientRect().y)
    cursor.style.transform = `rotate(${cursor.getBoundingClientRect().y - e.y}deg)`
    console.log(e)
    // cursor.style.top = e.y + "px";
    // cursor.style.left = e.x + "px";
  });
  return (
    <div className="box">
     <div className="cursor" id="cursor"></div>
    </div>
  );
}
