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
// window.addEventListener("click", function () {
//   link.map((item) => {
//     const hrefItem = item.href.slice(item.href.indexOf("#"));
//     const hrefWindow = window.location.href.slice(
//       window.location.href.indexOf("#")
//     );
//     if (hrefItem === hrefWindow) {
//       console.log(item.classList);
//       item.classList.add("active");
//     } else {
//       item.classList.remove("active");
//     }
//   });
// });
// console.log(link[0].href.slice(link[0].href.indexOf("#")));
const experience = document.querySelector("#experience").offsetTop;
const education = document.querySelector("#education").offsetTop;
const skills = document.querySelector("#skills").offsetTop;
const projects = document.querySelector("#projects").offsetTop;
const hobby = document.querySelector("#hobby").offsetTop;
const end = document.querySelector("#end").offsetTop;

btn.addEventListener("click", function () {
  nav.classList.toggle("nav-mobile__active");
});
