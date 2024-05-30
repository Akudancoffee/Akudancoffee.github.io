document.addEventListener( 'DOMContentLoaded', function(){
    const menuToggle = document.getElementById('nav-extra')
    const navbar = document.getElementById('navbar');
    const navbarLinks = document.querySelectorAll('.navbar a');

    menuToggle.addEventListener('click', function(){
        navbar.classList.toggle('active');
    });
    navbarLinks.forEach(function(link) {
        link.addEventListener('click', function() {
          navbar.classList.remove('active');
        });
    });
});