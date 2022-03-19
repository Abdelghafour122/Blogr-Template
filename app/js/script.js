const burgerMenu = document.querySelector(".burger");
const links = document.querySelector(".links");

let openSvg = "./images/icon-hamburger.svg";
let closeSvg = "./images/icon-close.svg";

burgerMenu.addEventListener("click", () => {
  let inImg = burgerMenu.querySelector("img");
  if (inImg.src.includes(openSvg.slice(1))) {
    inImg.src = closeSvg;
    links.style.display = "flex";
  } else {
    inImg.src = openSvg;
    links.style.display = "none";
  }
});
