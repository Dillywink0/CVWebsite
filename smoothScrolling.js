document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const target = document.querySelector(this.getAttribute('href'));

            if (target) {
                window.scrollTo({
                    top: target.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
});
const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('ul.menu');

menuToggle.addEventListener('click', () => {
    menu.classList.toggle('show');
});
