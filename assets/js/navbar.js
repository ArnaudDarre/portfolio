
// animate active element

document.addEventListener("DOMContentLoaded", () => {
  const nav = document.querySelector(".nav");
  const underline = document.querySelector(".nav__underline");
  const triggers = document.querySelectorAll(".nav__trigger");

  let active = document.querySelector(".nav__trigger--active");

  function moveUnderlineTo(element) {
    const rect = element.getBoundingClientRect();
    const navRect = nav.getBoundingClientRect();
    underline.style.width = rect.width + "px";
    underline.style.left = rect.left - navRect.left + "px";
  }

  if (active) moveUnderlineTo(active);

  triggers.forEach(trigger => {
    trigger.addEventListener("mouseenter", () => moveUnderlineTo(trigger));
    trigger.addEventListener("mouseleave", () => {
      if (active) moveUnderlineTo(active);
    });
  });
});


// mobile menu

const navbar = document.querySelector('.navbar');
const button = document.querySelector('.button--menu');

button.addEventListener('click', function () {
  button.classList.toggle('button--menu--open');
  navbar.classList.toggle('js-opened');
});
