document.addEventListener("DOMContentLoaded", function () {
  const containers = document.querySelectorAll(".container");

  function checkVisibility() {
    const viewportHeight = window.innerHeight;

    containers.forEach((container) => {
      const rect = container.getBoundingClientRect();
      const containerMidpoint = rect.top + rect.height / 2;

      if (containerMidpoint < viewportHeight) {
        container.classList.add("visible");
      }
    });
  }

  window.addEventListener("scroll", checkVisibility);
  checkVisibility();
});

