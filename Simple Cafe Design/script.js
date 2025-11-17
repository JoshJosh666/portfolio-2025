// Reveal-on-scroll for sections using Intersection Observer
const sections = document.querySelectorAll('section');

const revealSection = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target); // Stop observing once it's visible
    }
  });
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15, // Trigger when 15% of the section is visible
});

sections.forEach((section) => {
  sectionObserver.observe(section);
});

// Mobile Navigation (Hamburger Menu)
const menuToggle = document.querySelector('.menu-toggle');
const navUl = document.querySelector('nav ul');

menuToggle.addEventListener('click', () => {
  const isOpened = navUl.classList.toggle('active');
  menuToggle.setAttribute('aria-expanded', isOpened);
  document.body.classList.toggle('menu-open', isOpened);
  
  const menuIcon = document.getElementById('menu-icon');
  const closeIcon = document.getElementById('close-icon');
  
  if (isOpened) {
    menuIcon.style.display = 'none';
    closeIcon.style.display = 'block';
  } else {
    menuIcon.style.display = 'block';
    closeIcon.style.display = 'none';
  }
});

// Back to Top Button
const backToTopButton = document.querySelector('.back-to-top');

window.addEventListener('scroll', () => {
  // Show button if user scrolls down 400px
  if (window.scrollY > 400) {
    backToTopButton.classList.add('visible');
  } else {
    backToTopButton.classList.remove('visible');
  }
});