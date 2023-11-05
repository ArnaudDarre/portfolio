if (!window.CSS || !window.CSS.supports("color", "var(--fake-var)")) {
  document.querySelector(".browserWarning").style.display = "flex";
  document.body.classList.add("js-freeze");
}
