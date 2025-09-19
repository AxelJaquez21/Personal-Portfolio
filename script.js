document.addEventListener('DOMContentLoaded', () => {
  const elements = document.querySelectorAll('.Experience1, .Experience2, .Experience3');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        observer.unobserve(entry.target); // Stop observing once visible
      }
    });
  }, {
    threshold: 0.5 // Trigger when 50% of the element is visible
  });

  elements.forEach(element => {
    observer.observe(element);
  });
});
