var typed = new Typed(".multiple-text", {
strings: ["Frontend Developer", "YouTuber", "Photo Editor"],
typeSpeed: 100,
backSpeed: 100,
backDelay: 1000,
loop: true
})

/*==================== menu icon navbar ====================*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.oneclick = () => {
    menuIcon.classList.toggle('bx bx-x');
    navbar.classList.toggle('active');
};

/*==================== scroll sections active Link ====================*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec =>{
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navlinks.forEach(links =>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' +id + ']').classList.add('active');
            });
        };
    });
    /*==================== sticky navbar ====================*/
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrolly> 100);

    /*==================== remove toggle icon and navbar when click navbar Link (scroll) ====================*/
    menuIcon.classList.remove('bx bx-x');
    navbar.classList.remove('active');
};

/*==================== scroll reveal ====================*/
ScrollReveal({ 
    // reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
 });

 ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
 crollReveal().reveal('.home-img, .Skills-container, .Portfolio-box, .Contact form', { origin: 'bottom' });
 crollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
 crollReveal().reveal('.home-content p, .about-content', { origin: 'right' });