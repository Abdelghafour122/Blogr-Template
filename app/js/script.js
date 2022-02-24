const lis = document.querySelectorAll(".nav-ul li.glob");
const subLis = document.querySelectorAll(".pop");
const burgerMenu = document.querySelector(".burger");
const links = document.querySelector(".links");

let openSvg =
  "http://127.0.0.1:5500/blogr-landingpage/images/icon-hamburger.svg";
let closeSvg = "http://127.0.0.1:5500/blogr-landingpage/images/icon-close.svg";

burgerMenu.addEventListener("click", () => {
  let inImg = burgerMenu.querySelector("img");
  if (inImg.src == openSvg) {
    inImg.src = closeSvg;
    links.style.display = "flex";
  } else {
    inImg.src = openSvg;
    links.style.display = "none";
  }
});
