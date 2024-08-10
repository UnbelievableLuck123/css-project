document.addEventListener('DOMContentLoaded', function() {
    // Add JavaScript code here
    // For example, you can add event listeners for the navigation menu
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const sectionId = link.getAttribute('href');
            const section = document.querySelector(sectionId);
            section.scrollIntoView({ behavior: 'smooth' });
        });
    });
});
