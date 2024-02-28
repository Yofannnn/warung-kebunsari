// navbarHumberger
const menuToggle = document.querySelector('.menu-toggle');
const ul = document.querySelector('nav ul');
const span1 = document.getElementsByTagName('span')[0];
const span2 = document.getElementsByTagName('span')[1];
const span3 = document.getElementsByTagName('span')[2];
menuToggle.addEventListener('click' , function() {
    ul.classList.toggle('slide');
    span1.classList.toggle('slide');
    span2.classList.toggle('slide');
    span3.classList.toggle('slide');
    menuToggle.classList.toggle('slide');
    bodyDropdown.classList.remove('show')
});
//dropdown-contact
const contackClick = document.querySelector('nav ul li p');
const bodyDropdown = document.querySelector('.dropdown');
contackClick.addEventListener('click' , function(e) {
    bodyDropdown.classList.toggle('show');
});
