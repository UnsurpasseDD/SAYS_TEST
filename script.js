const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animated');
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.15,
    }
  );
  
  document.querySelectorAll('[data-animate]').forEach((element) => {
    observer.observe(element);
  });
  
  const navCta = document.querySelector('.nav .cta');
  if (navCta) {
    navCta.addEventListener('click', () => {
      navCta.classList.add('pulse');
      setTimeout(() => navCta.classList.remove('pulse'), 600);
    });
  }