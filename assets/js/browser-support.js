var style = document.createElement('div').style;
if (!('setProperty' in style)) {
  document.querySelector(".browserWarning").style.display = "flex";
  document.body.classList.add("js-freeze");
}
