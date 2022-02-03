const lis = document.querySelectorAll(".nav-ul li.glob");
const subLis = document.querySelectorAll(".pop");

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
