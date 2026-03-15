const nav = document.getElementById('mobile-nav');
const openBtn = document.getElementById('menu-open');
const closeBtn = document.getElementById('menu-close');
const headerBar = document.getElementById('header-bar');

openBtn.addEventListener('click', () => {
    nav.classList.add('open');
    openBtn.style.display = 'none';
    closeBtn.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
    nav.classList.remove('open');
    openBtn.style.display = 'block';
    closeBtn.style.display = 'none';
});

document.querySelectorAll('.has-dropdown').forEach(item => {
    item.querySelector('.nav__link').addEventListener('click', (e) => {
        e.stopPropagation();
        item.classList.toggle('open');
    });
});