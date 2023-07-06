const header = document.querySelector('header');
window.addEventListener('scroll', function() {
    if (window.pageYOffset > 0) {
        header.style.backgroundColor = '#000000';
    } else {
        header.style.backgroundColor = '#252525';
    }
});
const navLinks = document.querySelectorAll('nav ul li a');
navLinks.forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth'
        });
    });
});

// Example: Display the current year in the footer
const footerYear = document.querySelector('footer h5');
const currentYear = new Date().getFullYear();
footerYear.textContent =`© ${currentYear} Peter's Portfolio`;
