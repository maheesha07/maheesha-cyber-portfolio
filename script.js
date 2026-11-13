
// MOBILE NAVIGATION

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");

  menuToggle.setAttribute("aria-expanded", isOpen);
  menuToggle.textContent = isOpen ? "✕" : "☰";
});

// CLOSE MOBILE MENU AFTER CLICKING A LINK

document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.textContent = "☰";
  });
});

// CURRENT FOOTER YEAR

const yearElement = document.getElementById("year");

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

// SCROLL ANIMATIONS

const revealElements = document.querySelectorAll(
  ".section, .stat, .project-card, .skill-card, .cert-card"
);

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        obs.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12
  });

  revealElements.forEach(element => {
    element.classList.add("reveal");
    observer.observe(element);
  });
}

// ACTIVE NAVIGATION LINK

const pageSections = document.querySelectorAll(
  "main section[id]"
);

const navigationLinks = document.querySelectorAll(
  ".nav-links a"
);

if ("IntersectionObserver" in window) {
  const sectionObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navigationLinks.forEach(link => {
          link.classList.toggle(
            "active",
            link.getAttribute("href") === "#" + entry.target.id
          );
        });
      }
    });
  }, {
    rootMargin: "-35% 0px -55% 0px"
  });

  pageSections.forEach(section => {
    sectionObserver.observe(section);
  });
}

// CONSOLE MESSAGE

console.log(
  "%cMAHEESHA | CYBERSECURITY PORTFOLIO",
  "color:#00f5a0;font-size:16px;font-weight:bold;"
);

console.log(
  "%cThink. Analyze. Secure.",
  "color:#ff286b;font-size:12px;"
);
