@@include('slick.js');

const menuNav = document.getElementById('menu-nav');
const headerLink = document.querySelectorAll('.menu-nav__link');

menuNav.addEventListener('click', event => {
    event.preventDefault();
    headerLink.forEach(link => link.classList.remove('active-link'));

    let target = event.target;
    if (target.classList.contains('menu-nav__link')) {
        target.classList.add('active-link');
    }
});
