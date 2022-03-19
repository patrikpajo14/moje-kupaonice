const toggle = document.querySelector(".toggle");
const navbar = document.getElementById("navbar");
const header = document.getElementById("header");

console.log(header);

function toggleClick() {
  if (navbar.style.display === "block") {
    navbar.style.display = "none";
    toggle.querySelector("a").innerHTML = '<i class="fa-solid fa-bars"></i>';
  } else {
    navbar.style.display = "block";
    toggle.querySelector("a").innerHTML = '<i class="fa-solid fa-xmark"></i>';
  }
}

toggle.addEventListener("click", toggleClick, false);

window.addEventListener("resize", function () {
  if (this.innerWidth > 768) {
    navbar.removeAttribute("style");
  }
});

window.addEventListener("scroll", function () {
  let y = this.window.scrollY;
  console.log(y);
  if (y > 1) {
    header.style.backgroundColor = "rgb(0, 0, 0, 0.8)";
  } else {
    header.removeAttribute("style");
  }
});
