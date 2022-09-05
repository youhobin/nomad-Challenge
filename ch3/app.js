// <⚠️ DONT DELETE THIS ⚠️>
import "./styles.css";
const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];
// <⚠️ /DONT DELETE THIS ⚠️>

const hello = document.querySelector("h1");

const superEventHandler = {
  onMouseEnter: function () {
    hello.innerHTML = "The mouse is here!";
    hello.style.color = colors[0];
  },
  onMouseLeave: function () {
    hello.innerHTML = "The mouse is gone!";
    hello.style.color = colors[1];
  },
  onWindowResize: function () {
    hello.innerHTML = "You just resized!";
    hello.style.color = colors[2];
  },
  onContextMenu: function () {
    hello.innerHTML = "That was a right click!";
    hello.style.color = colors[3];
  }
};

hello.addEventListener("mouseenter", superEventHandler.onMouseEnter);
hello.addEventListener("mouseleave", superEventHandler.onMouseLeave);
window.addEventListener("resize", superEventHandler.onWindowResize);
window.addEventListener("contextmenu", superEventHandler.onContextMenu);
