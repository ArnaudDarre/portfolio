var style = document.createElement('div').style;
// checks if setProperty method is supported, which indicates support for CSS variables
if (!('setProperty' in style)) {
  document.querySelector(".browserWarning").style.display = "flex";
  document.body.classList.add("js-freeze");
}
