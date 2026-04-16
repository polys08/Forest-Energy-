const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('nav');


hamburger.addEventListener('click', () => {
    
    nav.classList.toggle('active');


    hamburger.classList.toggle('active');
});


const links = document.querySelectorAll('.nav-list a');


links.forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('active');
        hamburger.classList.remove('active');
    });
});
