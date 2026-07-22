// Fade sections in as they scroll into view
const revealEls = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
    }
  });
}, { threshold: 0.15 });

revealEls.forEach((el) => revealObserver.observe(el));

// Highlight the matching dot in the side nav as sections pass
const sections = document.querySelectorAll('main section, header.hero');
const dots = document.querySelectorAll('.dot-nav .dot');

const navObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const id = entry.target.getAttribute('id');
      dots.forEach((dot) => {
        dot.classList.toggle('active', dot.getAttribute('href') === `#${id}`);
      });
    }
  });
}, { threshold: 0.5 });

sections.forEach((section) => navObserver.observe(section));
