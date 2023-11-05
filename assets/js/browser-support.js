var supportsCssVars = function () {
  var t = document.createElement("style");
  t.innerHTML = ":root { --tmp-var: bold; }";
  document.head.appendChild(t);
  var isSupported = !!(window.CSS && window.CSS.supports && window.CSS.supports("font-weight", "var(--tmp-var)"));
  document.head.removeChild(t);
  return isSupported;
};

if (!supportsCssVars()) {
  document.querySelector(".browserWarning").style.display = 'flex';
  document.body.classList.add('no-css-variables-support');
}
