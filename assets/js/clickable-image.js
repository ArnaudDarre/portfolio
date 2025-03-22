document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".carousel__item").forEach(item => {
      const linkElement = item.querySelector(".carousel__button .link");
      const imageElement = item.querySelector(".carousel__imageInner");

      if (linkElement && imageElement) {
          const href = linkElement.getAttribute("href");
          imageElement.setAttribute("data-link", href);
          imageElement.addEventListener("click", () => {
            window.location.href = href;
          });
          imageElement.style.cursor = "pointer";
      }
  });
});
