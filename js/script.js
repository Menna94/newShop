const body = document.body;
const nav = document.querySelector(".main-header nav");
const navBrand = document.querySelector(".navbar-brand");
const img = document.querySelector(".light");
let lastScroll = 0;


window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;
  if (currentScroll <= 0) {
    body.classList.remove("scroll-up");
    img.setAttribute('src', '../images/logo.svg');
    return;
  }
  
  if (currentScroll > lastScroll && !body.classList.contains("scroll-down")) {
    // down
    body.classList.remove("scroll-up");
    body.classList.add("scroll-down");
  } else if (currentScroll < lastScroll && body.classList.contains("scroll-down")) {
    // up
    body.classList.remove("scroll-down");
    body.classList.add("scroll-up");
    img.setAttribute('src', '../images/logo-dark.svg')
  }
  lastScroll = currentScroll;
});
