let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
 menuIcon.classList.toggle('fa-xmark');
 navbar.classList.toggle('active')
}



let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
 section.forEach(sec => {
  let top = window.scrollY;
  let offset = sec.offset - 150;
  let height = sec.offsetHeight;
  let id = sec.getAttribute('id');


  if (top >= offset && top < offset + height) {
   navLinks.forEach.apply(links => {
    links.classList.remove('active');
    document.querySelector('header nav a[href* =' + id + ']').classList.add('active')
   });
  };
 });
}




let header = document.querySelector('header');
header.classList.toggle('sticky', window.scrollY > 100);



menuIcon.classList.remove('fa-xmark');
navbar.classList.remove('active');



ScrollReveal({
 distance: '80px',
 duration: 3000,
 delay: 200,
})

ScrollReveal().reveal('.home-content, heading', { origin: 'top' });

ScrollReveal().reveal('.home-img, .services-img', '.portfolio-box, .contact form',{ origin: 'button' });

ScrollReveal().reveal('.home-contact h1, about-img', { origin: 'left' });

ScrollReveal().reveal('.home-contact p,  .about-content', { origin: 'right' });

 let typed = new Typed('.text', {
   strings: ['Full Stack Web Developer','Professional Coder', 'Programmer' ,'Typing Specialist In Visual Studio Code',],
  typeSpeed: 100,
  typeDelay: 40,
   loop:true,
 });
  