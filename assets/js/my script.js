'use strict';

/**
 * navbar toggle
 */

const overlay = document.querySelector("[data-overlay]");
const navbar = document.querySelector("[data-navbar]");
const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");

const navToggleFunc = function () {
  navToggleBtn.classList.toggle("active");
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
}

navToggleBtn.addEventListener("click", navToggleFunc);
overlay.addEventListener("click", navToggleFunc);

for (let i = 0; i < navbarLinks.length; i++) {
  navbarLinks[i].addEventListener("click", navToggleFunc);
}



/**
 * header active on scroll
 */

const header = document.querySelector("[data-header]");
const hero = document.querySelector(".hero");

window.addEventListener("scroll", function () {
  window.scrollY >= 10 ? header.classList.add("active")
    : header.classList.remove("active");

  if (hero && window.innerWidth >= 768) {
    const scrollY = window.scrollY;
    hero.style.backgroundPositionY = `${-scrollY * 0.15}px`;
  }
});

document.querySelectorAll('.featured-car-card').forEach(card => {
  card.addEventListener('click', () => {
    card.classList.toggle('expanded');
  });
});