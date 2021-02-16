const toggles = document.querySelectorAll('.faq-toggle');

toggles.forEach(toggle => {
  toggle.addEventListener('click', (e) => {
    const faq = e.target.parentElement.classList.contains('faq')
      ? e.target.parentElement
      : e.target.parentElement.parentElement;
    faq.classList.toggle('active')
  });
});