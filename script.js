// Toggle mobile menu
document.querySelector('.hamburger').addEventListener('click', () => {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('mobile');
});
