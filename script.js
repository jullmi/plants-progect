
const menu = document.querySelector('.menu');
menu.addEventListener('click', () => {
    const nav = document.querySelector('nav')
    nav.classList.toggle('nav_active')
    menu.classList.toggle('menu_active')
})



