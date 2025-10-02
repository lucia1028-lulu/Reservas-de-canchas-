(function () {
  "use strict";

  document.addEventListener("DOMContentLoaded", () => {
    const imgs = Array.from(document.querySelectorAll(".carrusel-imagenes img"));
    const btnPrev = document.querySelector(".flecha-izquierda");
    const btnNext = document.querySelector(".flecha-derecha");

    if (!imgs.length) return;

    let index = 0;
    let autoplay = null;
    const DELAY = 3000;

    function showImage(i) {
      imgs.forEach((img, idx) => img.classList.toggle("active", idx === i));
    }

    function next() {
      index = (index + 1) % imgs.length;
      showImage(index);
    }

    function prev() {
      index = (index - 1 + imgs.length) % imgs.length;
      showImage(index);
    }

    function start() {
      stop();
      autoplay = setInterval(next, DELAY);
    }

    function stop() {
      if (autoplay) clearInterval(autoplay);
    }

    btnNext.addEventListener("click", () => { next(); start(); });
    btnPrev.addEventListener("click", () => { prev(); start(); });

    showImage(index);
    start();
  });
})();
