// Side navigation open/close functions
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}
// Avatar wave animation
document.addEventListener("DOMContentLoaded", () => {
  // Select all experience containers
  const avatar = document.querySelector('#rmp-avatar');

  // Ensure the model-viewer has loaded
  avatar.addEventListener('load', () => {
    const animations = avatar.availableAnimations;
    console.log('Available animations:', animations);

    if (animations.includes('wave')) {
      // Loop between wave and idle
      const loopWave = () => {
        avatar.animationName = 'wave';
        avatar.classList.add('waving');
        setTimeout(() => {
          avatar.animationName = 'idle';
          avatar.classList.remove('waving');
          setTimeout(loopWave, 3000); // idle for 3s before next wave
        }, 2000); // wave duration 2s
      };

      loopWave();
    } else {
      console.warn('Wave animation not found on this avatar.');
    }
  });
});

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
    { threshold: 0.2 } // show/hide when 20% of container is visible
  );

  // Observe each container
  containers.forEach((container) => observer.observe(container));
});
