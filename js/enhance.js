(function () {
  "use strict";

  var root = document.documentElement;
  var reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var canObserve = "IntersectionObserver" in window;

  /* --- 1. Reveal sections as they scroll into view ---------- */
  if (canObserve && !reduced) {
    root.classList.add("js-reveal");

    var targets = document.querySelectorAll(".reveal");

    /* Stagger siblings inside the same grid so cards arrive one
       after another rather than all at once. */
    document.querySelectorAll(".cards").forEach(function (grid) {
      grid.querySelectorAll(":scope > .reveal").forEach(function (el, i) {
        el.style.setProperty("--reveal-delay", i * 90 + "ms");
      });
    });

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
    );

    targets.forEach(function (el) {
      observer.observe(el);
    });

    /* Safety net: anything still hidden after 1.2s is shown anyway,
       so a failed observer can never hide content permanently. */
    window.setTimeout(function () {
      targets.forEach(function (el) {
        el.classList.add("is-visible");
      });
    }, 1200);
  }

  /* --- 2. Shadow under the header once the page scrolls ----- */
  var header = document.querySelector(".site-header");
  if (header) {
    var ticking = false;
    var onScroll = function () {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(function () {
        header.classList.toggle("is-stuck", window.scrollY > 8);
        ticking = false;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }
})();