const target = document.getElementById('header__menu__line');
target.addEventListener('click', () => {
    const target = document.getElementById('header__menu__line');
    target.classList.toggle('open');
    const nav = document.getElementById('header-nav');
    nav.classList.toggle('in');
});