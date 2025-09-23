document.addEventListener("DOMContentLoaded", () => {
  const loader = document.querySelector(".loader");
  const content = document.querySelector(".page-content");

  loader.classList.add("loader-hidden");

  loader.addEventListener("transitionend", () => {
    loader.remove();
    content.style.display = "block"; // show the content
  });

  // Animate experiences on scroll
  const hiddenElements = document.querySelectorAll(
    ".Experience1.hidden, .Experience2.hidden, .Experience3.hidden"
  );

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          entry.target.classList.remove("hidden");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );

  hiddenElements.forEach((el) => observer.observe(el));
});
