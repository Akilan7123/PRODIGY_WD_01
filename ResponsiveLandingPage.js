// Change nav style on scroll
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = '#555';
    } else {
        navbar.style.backgroundColor = '#333';
    }
});

// Change link color on hover
const links = document.querySelectorAll('nav ul li a');
links.forEach(link => {
    link.addEventListener('mouseenter', () => {
        link.style.color = '#f90';
    });
    link.addEventListener('mouseleave', () => {
        link.style.color = '';
    });
});
