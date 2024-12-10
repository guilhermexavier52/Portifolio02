

let btnMenu = document.getElementById('btn-menu');
let menu = document.getElementById('menu-mobile');
let overlay = document.getElementById('overlay-menu');

btnMenu.addEventListener('click', () => {
    menu.classList.add('abrir-menu');
    overlay.classList.add('mostrar-overlay');
});

overlay.addEventListener('click', () => {
    menu.classList.remove('abrir-menu');
    overlay.classList.remove('mostrar-overlay');
});