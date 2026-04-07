// Pega os elementos do DOM
const hamburger = document.getElementById('hamburger'); // botão hamburger
const nav = document.getElementById('nav'); // menu de navegação

// Quando o usuário clicar no hamburger
hamburger.addEventListener('click', () => {
    // Alterna a classe 'open' no menu para mostrar/esconder
    nav.classList.toggle('active');

    // Alterna a classe 'active' no hamburger para animar as linhas
    hamburger.classList.toggle('active');
});