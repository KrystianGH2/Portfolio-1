let menuItems = document.querySelector(".menuItems");
const menuBar1 = document.querySelector(".menubar1");
const menuBar2 = document.querySelector(".menubar2");
const menuBar3 = document.querySelector(".menubar3");
const cover = document.querySelector(".cover");
let navLinks = document.querySelector(".nav-links");

const closeMenu = () => {
  navLinks.classList.remove("active");
  menuBar1.classList.remove("active");
  menuBar2.classList.remove("active");
  menuBar3.classList.remove("active");
  cover.classList.remove("active");
};

menuItems.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  menuBar1.classList.toggle("active");
  menuBar2.classList.toggle("active");
  menuBar3.classList.toggle("active");
  cover.classList.toggle("active");
});

document.addEventListener("click", (event) => {
  const targetElement = event.target;
  const isMenuClicked =
    menuItems.contains(targetElement) || navLinks.contains(targetElement);

  if (!isMenuClicked) {
    closeMenu();
  }
});

menuItems.addEventListener("blur", () => {
  cover.classList.remove("active");
});
