import "./Confetti.css";

export default function Confetti() {
  const animation = ["anim", "anim", "anim2"];
  const element = ["fa-solid fa-sun fa-spin", "fa-solid fa-moon fa-flip", "fa-brands fa-pagelines fa-spin", "fa-solid fa-circle fa-spin", "fa-solid fa-star fa-spin", "fa-solid fa-balloons fa-spin-pulse", "fa-solid fa-feather fa-spin", "fa-solid fa-hashtag", "fa-solid fa-leaf fa-spin", "fa-solid fa-snowflake fa-spin", "fa-solid fa-bolt-lightning fa-spin fa-spin-reverse", "fa-solid fa-play fa-flip", "fa-solid fa-stairs fa-spin", "fa-solid fa-xmark", "fa-solid fa-slash fa-spin", "fa-solid fa-tick fa-spin", ]

  document.onclick = (e) => {
    let body = document.getElementsByClassName("container")[0] as HTMLBodyElement;

    for (let i = 0; i < 500; i++) {
      setTimeout(() => {

        // Box animation
        let box = document.createElement("div");
        box.classList.add('box')
        box.style.top = -100 + "px";
        box.style.left = Math.random() * window.innerWidth + "px";
        box.style.width = "100px";
        box.style.height = "60px";


        // Span animation
        let span = document.createElement("i");
        span.className = element[Math.floor(Math.random() * (17 - 0 + 1) + 0)];
        span.style.color = `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, 1)`;
        // span.style.width =Math.floor(Math.random() * (15 - 5 + 1) + 5) + "px";
        // span.style.height =Math.floor(Math.random() * (20 - 5 + 1) + 5) + "px";
        // span.style.borderRadius = Math.floor(Math.random() * (10 - 1 + 1) + 1) + "px";
        // span.style.transform = `rotate(${Math.floor(Math.random() * (20 + 10 + 1) - 10)}deg)`;
        // span.classList.add(animation[Math.floor(Math.random() * (4 + 0 + 1) - 0)]);


        // Appending both
        box.appendChild(span);
        body.appendChild(box);
      }, 60 * i);
    }
  };
  return (
    <div>
    </div>
  );
}


