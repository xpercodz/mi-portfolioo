const header = document.querySelector('header');
window.addEventListener('scroll', function() {
    if (window.pageYOffset > 0) {
        header.style.backgroundColor = '#000000';
    } else {
        header.style.backgroundColor = '#252525';
    }
});