document.addEventListener("DOMContentLoaded", () => {
  const hiddenElements = document.querySelectorAll(".hidden");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        entry.target.classList.remove("hidden"); 
        observer.unobserve(entry.target); // optional, only animate once
      }
    });
  }, { threshold: 0.2 }); // trigger when 20% of box is visible

  hiddenElements.forEach(el => observer.observe(el));
});