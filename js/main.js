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

  var typewriterParagraphs = document.querySelectorAll(".about__content p");
  var prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  if (
    "IntersectionObserver" in window &&
    typewriterParagraphs.length &&
    !prefersReducedMotion
  ) {
    var CHAR_DELAY = 10;
    var PARAGRAPH_PAUSE = 250;
    var fullTexts = [];
    var typewriterStarted = false;

    typewriterParagraphs.forEach(function (p, index) {
      fullTexts[index] = p.textContent;
      p.textContent = "";
    });

    function typeParagraphs() {
      if (typewriterStarted) {
        return;
      }
      typewriterStarted = true;

      var pIndex = 0;
      var charIndex = 0;

      function typeNext() {
        if (pIndex >= typewriterParagraphs.length) {
          return;
        }

        var paragraph = typewriterParagraphs[pIndex];
        var text = fullTexts[pIndex];

        paragraph.classList.add("is-typing");
        paragraph.textContent = text.slice(0, charIndex);
        charIndex++;

        if (charIndex <= text.length) {
          setTimeout(typeNext, CHAR_DELAY);
        } else {
          paragraph.classList.remove("is-typing");
          pIndex++;
          charIndex = 0;
          setTimeout(typeNext, PARAGRAPH_PAUSE);
        }
      }

      typeNext();
    }

    var aboutContent = document.querySelector(".about__content");
    var typeObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            typeParagraphs();
            typeObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" }
    );

    typeObserver.observe(aboutContent);

    window.addEventListener("load", function () {
      if (typewriterStarted) {
        return;
      }
      var rect = aboutContent.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        typeParagraphs();
        typeObserver.unobserve(aboutContent);
      }
    });
  }

  var lightbox = document.getElementById("lightbox");
  var lightboxImage = lightbox ? lightbox.querySelector(".lightbox__image") : null;
  var lightboxClose = lightbox ? lightbox.querySelector(".lightbox__close") : null;
  var lightboxTriggers = document.querySelectorAll("[data-lightbox-src]");
  var lastLightboxTrigger = null;

  function openLightbox(trigger) {
    lightboxImage.src = trigger.getAttribute("data-lightbox-src");
    lightboxImage.alt = trigger.getAttribute("data-lightbox-alt") || "";
    lightbox.classList.add("is-open");
    document.body.style.overflow = "hidden";
    lastLightboxTrigger = trigger;
    lightboxClose.focus();
  }

  function closeLightbox() {
    lightbox.classList.remove("is-open");
    document.body.style.overflow = "";
    if (lastLightboxTrigger) {
      lastLightboxTrigger.focus();
    }
  }

  if (lightbox && lightboxImage && lightboxClose && lightboxTriggers.length) {
    lightboxTriggers.forEach(function (trigger) {
      trigger.addEventListener("click", function () {
        openLightbox(trigger);
      });
    });

    lightboxClose.addEventListener("click", closeLightbox);

    lightbox.addEventListener("click", function (event) {
      if (event.target === lightbox) {
        closeLightbox();
      }
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && lightbox.classList.contains("is-open")) {
        closeLightbox();
      }
    });
  }

  var githubCard = document.getElementById("github-card");

  if (githubCard) {
    var githubUser = githubCard.getAttribute("data-github-user");
    var githubName = document.getElementById("github-name");
    var githubBio = document.getElementById("github-bio");

    fetch("https://api.github.com/users/" + githubUser)
      .then(function (response) {
        if (!response.ok) {
          throw new Error("GitHub API respondió con error");
        }
        return response.json();
      })
      .then(function (data) {
        // Solo se sustituye el contenido estático de respaldo si la API
        // devuelve un valor válido para ese campo concreto.
        if (data.name) {
          githubName.textContent = data.name;
        }
        if (data.bio) {
          githubBio.textContent = data.bio;
        }
      })
      .catch(function () {
        // La tarjeta ya muestra el respaldo estático embebido en el HTML,
        // así que no hace falta ninguna acción si la API falla.
      });
  }
})();
