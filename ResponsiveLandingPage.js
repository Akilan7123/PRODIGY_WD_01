// Change nav style on scroll
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 80) {
        navbar.style.backgroundColor = '#f2f2f2';
    } else {
        navbar.style.backgroundColor = '#fff';
    }
});


// Change link color on hover
const links = document.querySelectorAll('div ul li a');
links.forEach(link => {
    link.addEventListener('mouseenter', () => {
        link.style.color = '#f90';
    });
    link.addEventListener('mouseleave', () => {
        link.style.color = '';
    });
});