(function () {
  var headers = document.querySelectorAll(".project-card__header");

  headers.forEach(function (header) {
    header.addEventListener("click", function () {
      toggleCard(header);
    });

    header.addEventListener("keydown", function (event) {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        toggleCard(header);
      }
    });
  });

  function toggleCard(header) {
    var card = header.closest(".project-card");
    var isOpen = header.getAttribute("aria-expanded") === "true";

    header.setAttribute("aria-expanded", String(!isOpen));
    card.classList.toggle("is-open", !isOpen);
  }

  var reveals = document.querySelectorAll(".reveal");

  if ("IntersectionObserver" in window && reveals.length) {
    reveals.forEach(function (el) {
      el.classList.add("reveal--ready");
    });

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" }
    );

    reveals.forEach(function (el) {
      observer.observe(el);
    });

    // Si se llega directamente a una sección (ej. enlace con #ancla), el
    // salto de scroll inicial puede ocurrir antes de que el observer
    // registre la posición real: se revisa una vez más tras la carga.
    window.addEventListener("load", function () {
      reveals.forEach(function (el) {
        if (el.classList.contains("is-visible")) {
          return;
        }
        var rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          el.classList.add("is-visible");
          observer.unobserve(el);
        }
      });
    });
  }
})();
