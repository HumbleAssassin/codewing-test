let menu = document.getElementById('menu-items');
let close = document.getElementsByClassName('fa-close')

function openMenu() {
    menu.classList.add('open');
    close.classList.add('show');
}

function closeMenu() {
    menu.classList.remove('open');
    close.classList.remove('show');
}