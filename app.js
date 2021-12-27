const hero = document.querySelector('.video');
const intro = document.querySelector('.intro');
const logo = document.querySelector('#logo');
const navLinksAnimation = document.querySelector('.nav-links');
const subLogo = document.querySelector('#sub-logo');
const trailerBox = document.querySelector('.trailer-box');
const mediaQuery = window.matchMedia('(min-width: 1000px)');
const mediaQueryPhone = window.matchMedia('(min-width: 860px)');

const tl = new TimelineMax();

// Cursor Vars
let mouseCursor = document.querySelector(".cursor");
let navLinks = document.querySelectorAll("nav a");
let ddLinks = document.querySelectorAll(".ddlinks");

// Cursor Event Listener
window.addEventListener('mousemove', cursor);

// Cursor Function

function cursor(e) {
    mouseCursor.style.top = e.pageY + 'px';
    mouseCursor.style.left = e.pageX + 'px';
}
navLinks.forEach(link => {
    link.addEventListener("mouseleave", () => {
        mouseCursor.classList.remove("link-grow");
        link.classList.remove("hovered-link");
    });
    link.addEventListener("mouseover", () => {
        mouseCursor.classList.add("link-grow");
        link.classList.add("hovered-link");
    });
    
});
ddLinks.forEach(link => {
    link.addEventListener("mouseleave", () => {
        mouseCursor.classList.remove("link-grow-dd");
        link.classList.remove("hovered-link");
    });
    link.addEventListener("mouseover", () => {
        mouseCursor.classList.add("link-grow-dd");
        link.classList.add("hovered-link");
    });
    
});



if (mediaQuery.matches) {
    tl.fromTo(intro, 2 , {opacity:"0"}, {opacity: "1", ease: Power4.easeOut})
    .fromTo(hero, 2 , {opacity:"0.9" , height : "0%"}, {opacity: "1",height: "100%", ease: Power1.easeOut}, "-=1")
    .fromTo(hero,1.5 , {width : "100%"}, {width: "90%", ease: Power1.easeInOut})
.fromTo(logo, 1.5, {opacity : "0" , y:"-5px"},{opacity : ".85",y:"0px", ease: Power2.easeOut}, "-=.2")
.fromTo(subLogo, 1.25, {opacity: "0" , y: -"30px"}, {opacity: ".85", y: "0px", ease: Power2.easeInOut}, "-=1.7")
.fromTo(navLinksAnimation, 1.25, {opacity: "0" , y: -"30px"}, {opacity: ".95", y: "0px", ease: Power2.easeInOut}, "-=1.8")
;
}else{
    tl.fromTo(hero,1.5 , {opacity:"0" , height : "0%"}, {opacity: "1",height: "100%", ease: Power2.easeInOut})
.fromTo(hero, 1.2, {opacity:"0" ,width: '100%'}, {opacity: "1",width: '90%',  ease: Power2.easeInOut}, "-=.8")
.fromTo(logo, 1.5, {opacity : "0" , y:"-25px"},{opacity : "1",y:"0px", ease: Power2.easeOut}, "-=1")
.fromTo(subLogo, 1.5, {opacity : "0"},{opacity : ".8"}, "-=1")
.fromTo(navLinksAnimation, 1.8, {opacity: "0" , x: "30px"}, {opacity: "1", x: "-90px", ease: Power2.easeOut}, "-=2.3")
;
}

// tl.fromTo(hero,1.2 , {opacity:"0" , height : "0%"}, {opacity: "1",height: "100%", ease: Power2.easeInOut})
// .fromTo(hero, 1.2, {opacity:"0" ,width: '100%'}, {opacity: "1",width: '90%',  ease: Power2.easeInOut}, "-=.8")
// .fromTo(logo, 1.5, {opacity : "0" , y:"-25px"},{opacity : "1",y:"0px", ease: Power2.easeOut}, "-=1")
// .fromTo(subLogo, 1.5, {opacity : "0"},{opacity : "1"}, "-=1")
// .fromTo(navLinksAnimation, 1.8, {opacity: "0" , x: "30px"}, {opacity: "1", x: "-90px", ease: Power2.easeOut}, "-=2.3")
// ;

