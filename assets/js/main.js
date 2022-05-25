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
// const handleScroll = (n) => {
//   for (let i = n; i <= n; i++) {
//     for (let j = 0; j < link.length; j++) {
//       link[i].classList.add("active");
//       if (j !== i) {
//         link[j].classList.remove("active");
//       }
//     }
//   }
// };
// window.addEventListener("scroll", function (e) {
//   console.log(this.scrollY);
//   if (this.scrollY >= 0) {
//     handleScroll(0);
//   } else if (this.scrollY >= 300) {
//     handleScroll(1);
//   } else if (this.scrollY >= 600) {
//     handleScroll(2);
//   } else if (this.scrollY >= 900) {
//     handleScroll(3);
//   } else if (this.scrollY >= 1200) {
//     handleScroll(4);
//   } else if (this.scrollY >= 1500) {
//     handleScroll(5);
//   }
// });

btn.addEventListener("click", function () {
  nav.classList.toggle("nav-mobile__active");
});
