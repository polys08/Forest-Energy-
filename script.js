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

// pega os elementos
const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('nav');

// pega todos os links do menu
const links = document.querySelectorAll('.nav-list a');

// quando clicar em um link
links.forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('active');        // fecha o menu
        hamburger.classList.remove('active');  // animação do botão volta
    });
});