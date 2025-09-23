// Side navigation open/close functions
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}


// into view when scrolled into view affect on experience section2
document.addEventListener("DOMContentLoaded", () => {
  // Select all experience containers
  const containers = document.querySelectorAll(
    ".Experience-Container1, .Experience-Container2, .Experience-Container3"
  );

  // IntersectionObserver to trigger animation when visible/invisible
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");   // slide in
        } else {
          entry.target.classList.remove("show"); // slide out
        }
      });
    },
    { threshold: 0.2 }
  );

  // Observe each container
  containers.forEach((container) => observer.observe(container));
});
