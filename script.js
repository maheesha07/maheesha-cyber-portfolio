
// Reveal sections when scrolling
const sections = document.querySelectorAll('.section');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, {
  threshold: 0.15
});

sections.forEach((section) => {
  section.classList.add('reveal');
  observer.observe(section);
});

// Update footer year
const footer = document.querySelector('footer p');

if (footer) {
  footer.textContent =
    `© ${new Date().getFullYear()} Maheesha Dassanayake. Built with curiosity.`;
}

// Console welcome message
console.log(
  '%cWelcome to Maheesha’s Cybersecurity Portfolio',
  'color: #00f5a0; font-size: 16px; font-weight: bold;'
);
