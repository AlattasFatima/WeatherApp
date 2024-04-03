const button = document.getElementById("modeButton");
const body = document.getElementById("main");
const navBar = document.getElementById("nav");
const navText = document.getElementsByClassName("text");
const foodBTN = document.getElementById("foodBtn");

let mode = "light";

function switchMode() {
  console.log("hi");
  if (mode === "light") {
    mode = "night";
    navBar.style.background = "#352F44";
    body.style.background = "#5C5470";
    for (let i = 0; i < navText.length; i++) {
      navText[i].style.color = "#9DB2BF";
    }
  } else {
    mode = "light";
    nav.style.background = "#bc7474";
    body.style.background = "bisque";
    for (let i = 0; i < navText.length; i++) {
      navText[i].style.color = "#575151";
    }
  }
}
button.addEventListener("click", switchMode);