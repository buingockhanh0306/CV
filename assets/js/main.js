const link = document.querySelectorAll(".link-no-active");
const btn = document.querySelector(".nav-icon");
const nav = document.querySelector(".nav-mobile");
for (var i = 0; i < link.length; i++) {
  for (let j = 0; j < link.length; j++) {
    link[i].addEventListener("click", function () {
      this.classList.add("active");
      nav.classList.remove("nav-mobile__active");
      if (j !== i) {
        link[j].classList.remove("active");
      }
    });
  }
}
const experience = document.querySelector("#experience").offsetTop;
const education = document.querySelector("#education").offsetTop;
const skills = document.querySelector("#skills").offsetTop;
const projects = document.querySelector("#projects").offsetTop;
const hobby = document.querySelector("#hobby").offsetTop;
const end = document.querySelector("#end").offsetTop;

btn.addEventListener("click", function () {
  nav.classList.toggle("nav-mobile__active");
});
