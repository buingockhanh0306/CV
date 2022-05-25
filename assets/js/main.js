const link = document.querySelectorAll(".link-no-active");
for (var i = 0; i < link.length; i++) {
  for (let j = 0; j < link.length; j++) {
    link[i].addEventListener("click", function () {
      this.classList.add("active");
      if (j !== i) {
        link[j].classList.remove("active");
      }
    });
  }
}
