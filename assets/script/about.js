// parallax
const header = document.querySelector('header');
const imgScroll = document.querySelector('.imgScroll .bg');
window.addEventListener('scroll' , function() {
    let scroll = window.scrollY;
    header.firstElementChild.style.transform = `scale(${1 + (scroll*.0004)})`;
    if(window.innerWidth < 575.98){
        imgScroll.style.transform = `translateY(${(this.innerHeight - scroll*.23)}px)`
    } else imgScroll.style.transform = `translateY(${(this.innerHeight - scroll*.255)}px)`;
});
