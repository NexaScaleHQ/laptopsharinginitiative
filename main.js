const handleLoadPage = () => {
  const menu_icon = document.querySelector(".menu-icon");
  const close_icon = document.querySelector(".close-icon");
  const nav_bar = document.querySelector(".navigation");

  menu_icon.addEventListener("click", () => {
    nav_bar.classList.add("show-nav");
  });

  close_icon.addEventListener("click", () => {
    nav_bar.classList.remove("show-nav");
  });
};

window.addEventListener("DOMContentLoaded", handleLoadPage);
