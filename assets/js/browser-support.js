var supportsCssVars = function () {
  var e, t = document.createElement("style");
  return t.innerHTML = "root: { --tmp-var: bold; }", document.head.appendChild(t), e = !!(window.CSS && window.CSS.supports && window.CSS.supports("font-weight", "var(--tmp-var)")), t.parentNode.removeChild(t), e
};

if (!supportsCssVars()) {
  document.querySelector(".browserWarning").style.display = 'flex';
  document.body.classList.add('js-freeze');
}
