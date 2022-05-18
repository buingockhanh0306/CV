const link = document.querySelectorAll(".link-no-active");
for (var i = 0; i < link.length; i++) {
  link[i].addEventListener("click", function () {
    this.classList.add("active");
  });
}
