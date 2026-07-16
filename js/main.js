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
})();
