const navLinks = document.querySelectorAll('nav a');

    navLinks.forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault(); 
        const targetId = link.getAttribute('href').substring(1); 
        const targetElement = document.getElementById(targetId); 
        targetElement.scrollIntoView({ behavior: 'smooth' });
    });

});

const cards = document.querySelectorAll('.card');

cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.boxShadow = '0px 0px 10px 0px rgba(0,0,0,0.75)';
    });

    card.addEventListener('mouseleave', () => {
        card.style.boxShadow = 'none';
    });
});
