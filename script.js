document.getElementById('darkModeToggle').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const isDarkMode = document.body.classList.contains('dark-mode');
    document.getElementById('darkModeToggle').textContent = isDarkMode ? '☀️' : '🌙';
});

// Obtém todos os cards
const cards = document.querySelectorAll('.link-card');

// Adiciona o evento de clique em cada card
cards.forEach(card => {
  card.addEventListener('click', function() {
    // Obtém o link do atributo 'data-url' e redireciona
    const url = card.getAttribute('data-url');
    window.open(url, '_blank'); // Abre o link em uma nova aba
  });
});

