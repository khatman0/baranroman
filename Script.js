document.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('.toc-link');
  const chapters = document.querySelectorAll('.chapter');

  if (!links.length || !chapters.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        links.forEach(l => l.classList.remove('active'));
        const active = document.querySelector(`.toc-link[href="#${entry.target.id}"]`);
        if (active) active.classList.add('active');
      }
    });
  }, { rootMargin: '-30% 0px -60% 0px', threshold: 0 });

  chapters.forEach(ch => observer.observe(ch));
});
