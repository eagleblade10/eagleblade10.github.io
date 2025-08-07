document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll("nav a");
  navLinks.forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = link.getAttribute("href");
      document.querySelector(targetId).scrollIntoView({ behavior: "smooth" });
    });
  });
});

window.addEventListener('scroll', () => {
  const hero = document.getElementById('hero');
  const nav = document.querySelector('.hero-nav');
  const heroBottom = hero.offsetTop + hero.offsetHeight;

  if (window.scrollY >= heroBottom) {
    nav.classList.add('sticky');
  } else {
    nav.classList.remove('sticky');
  }
});

window.addEventListener('scroll', () => {
  const heroHeight = document.getElementById('hero').offsetHeight;
  if (window.scrollY > heroHeight) {
    document.body.classList.add('scrolled');
  } else {
    document.body.classList.remove('scrolled');
  }
});
