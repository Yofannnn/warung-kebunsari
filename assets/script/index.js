const header = document.querySelector('header');
const article = document.querySelector('.article');
const reservation = document.querySelector('.reservation');

window.addEventListener('scroll', function(){
    let scroll = window.scrollY;
    // header
    header.lastElementChild.style.transform = `translateY(${0 + (scroll*.3)}px)`;
    // wrapped img food
    if(scroll > (article.firstElementChild.offsetTop - window.innerHeight)){
        article.firstElementChild.firstElementChild.classList.remove('unseen');
    } else article.firstElementChild.firstElementChild.classList.add('unseen');
    // wrapped text food
    if(scroll > (article.firstElementChild.nextElementSibling.offsetTop - window.innerHeight)){
        article.firstElementChild.nextElementSibling.firstElementChild.classList.remove('unseen');
    } else article.firstElementChild.nextElementSibling.firstElementChild.classList.add('unseen');
    // wrapped text drink
    if(scroll > (article.firstElementChild.nextElementSibling.nextElementSibling.offsetTop - window.innerHeight)){
        article.firstElementChild.nextElementSibling.nextElementSibling.firstElementChild.classList.remove('unseen');
    } else article.firstElementChild.nextElementSibling.nextElementSibling.firstElementChild.classList.add('unseen');
    // wrapped img drink
    if(scroll > (article.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.offsetTop - window.innerHeight)){
        article.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.firstElementChild.classList.remove('unseen');
    } else article.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.firstElementChild.classList.add('unseen');
    // wrapped img enjoy
    if(scroll > (article.lastElementChild.previousElementSibling.firstElementChild.offsetTop - window.innerHeight)){
        article.lastElementChild.previousElementSibling.firstElementChild.classList.remove('unseen');
    } else article.lastElementChild.previousElementSibling.firstElementChild.classList.add('unseen');
    // wrapped text enjoy
    if(scroll > (article.lastElementChild.firstElementChild.offsetTop - window.innerHeight)){
        article.lastElementChild.firstElementChild.classList.remove('unseen');
    } else article.lastElementChild.firstElementChild.classList.add('unseen');
    // reservation
    if(window.innerWidth < 575.98){
        reservation.lastElementChild.style.transform = `translateY(${this.innerHeight + (scroll* -.13)}px)`;
    } else reservation.lastElementChild.style.transform = `translateY(${this.innerHeight + (scroll* -.2)}px)`;
});

// loading
window.addEventListener('load', () => {
    document.querySelector('.container-loader').style.display = "none";
    header.firstElementChild.firstElementChild.classList.remove('unseen');
    header.firstElementChild.firstElementChild.nextElementSibling.classList.remove('unseen');
    header.firstElementChild.lastElementChild.previousElementSibling.classList.remove('unseen');
    header.firstElementChild.lastElementChild.classList.remove('unseen');
});
