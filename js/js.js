const body = document.body;
const nav = document.querySelector(".main-header nav");
const navBrand = document.querySelector(".navbar-brand");
const scrollUp = "scroll-up";
const scrollDown = "scroll-down";
const blackLogo = "blackLogo";
const bgWhite = "bgWhite";
let lastScroll = 0;


window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;
  if (currentScroll <= 0) {
    body.classList.remove(scrollUp, "nav-scrolled");
    navBrand.classList.add("whiteLogo");
    navBrand.classList.remove("blackLogo")
    return;
  }
  
  if (currentScroll > lastScroll && !body.classList.contains(scrollDown)) {
    // down
    body.classList.remove(scrollUp, "nav-scrolled");
    body.classList.add(scrollDown);
    navBrand.classList.add("blackLogo");
    navBrand.classList.remove("whiteLogo");
  } else if (currentScroll < lastScroll && body.classList.contains(scrollDown)) {
    // up
    body.classList.remove(scrollDown);
    body.classList.add(scrollUp, "nav-scrolled");
  }
  lastScroll = currentScroll;
});

 