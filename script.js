document.addEventListener("DOMContentLoaded", function() {
  const linkCards = document.querySelectorAll('.link-card');

  linkCards.forEach(card => {
    card.addEventListener('click', function() {
      const link = card.getAttribute('data-link');  // Obtém o link do atributo data-link
      window.open(link, '_blank');  // Abre o link em uma nova aba
    });
  });
});

