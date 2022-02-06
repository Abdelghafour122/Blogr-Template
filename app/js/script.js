const lis = document.querySelectorAll(".nav-ul li.glob");
const subLis = document.querySelectorAll(".pop");
const burgerMenu = document.querySelector(".burger");

lis.forEach((li) => {
  li.addEventListener("click", () => {
    const subLi = li.querySelector(".pop");
    subLis.forEach(
      (sLi) =>
        sLi !== subLi &&
        sLi.classList.contains("fade-in") &&
        sLi.classList.remove("fade-in")
    );
    subLi.classList.toggle("fade-in");
  });
});

let openSvg =
  "http://127.0.0.1:5500/blogr-landingpage/images/icon-hamburger.svg";
let closeSvg = "http://127.0.0.1:5500/blogr-landingpage/images/icon-close.svg";

burgerMenu.addEventListener("click", () => {
  let inImg = burgerMenu.querySelector("img");
  if (inImg.src == openSvg) {
    inImg.src = closeSvg;
  } else {
    inImg.src = openSvg;
  }
});
