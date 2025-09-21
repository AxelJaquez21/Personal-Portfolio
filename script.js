document.addEventListener("DOMContentLoaded", () => {
    const hiddenElements = document.querySelectorAll(
        ".Experience1.hidden, .Experience2.hidden, .Experience3.hidden"
    );

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
                entry.target.classList.remove("hidden"); // optional, keeps code cleaner
                observer.unobserve(entry.target); // only animate once
            }
        });
    }, { threshold: 0.2 }); // trigger when 20% visible

    hiddenElements.forEach((el) => observer.observe(el));
});

/* -Keep this as a comment and chnage the selectiors for the boxes you created-

document.addEventListener("DOMContentLoaded", () => {
    const hiddenElements = document.querySelectorAll(
        ".Experience1.hidden, .Experience2.hidden, .Experience3.hidden"
    );

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
                entry.target.classList.remove("hidden"); // optional, keeps code cleaner
                observer.unobserve(entry.target); // only animate once
            }
        });
    }, { threshold: 0.2 }); // trigger when 20% visible

    hiddenElements.forEach((el) => observer.observe(el));
});
 */