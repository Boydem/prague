const mediaQuery = window.matchMedia('(min-width: 1000px)');
const mediaQueryPhone = window.matchMedia('(min-width: 860px)');
const vcTitle = document.querySelector('title');
const vc = document.querySelector('more-works');

// const circleBorder = document.querySelectorAll('#circle-thing');
const tl = new TimelineMax();


let acc = document.querySelectorAll('.accordion');
let i;
let len = acc.length;

// Video clips
for(i = 0; i < len ; i++ ) {
    acc[i].addEventListener('click', function(){
        this.classList.toggle('active');
        var panel = this.nextElementSibling;
        if(panel.style.maxHeight) {
            panel.style.maxHeight = null;
        }else {
            panel.style.maxHeight = panel.scrollHeight + 'px';

        }
    });
}
let accMw = document.querySelectorAll('.acc-mw');

let j;
let lenJ = accMw.length;
// MORE WORKS
for(j = 0; j < lenJ ; j++ ) {
    accMw[j].addEventListener('click', function(){
        this.classList.toggle('active-mw');
        var panel = this.nextElementSibling;
        if(panel.style.maxHeight) {
            panel.style.maxHeight = null;
        }else {
            panel.style.maxHeight = panel.scrollHeight + 'px';

        }
    });
}




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
acc.forEach(some => {
    some.addEventListener("mouseleave", () => {
        mouseCursor.classList.remove("acc-grow");
    });
    some.addEventListener("mouseover", () => {
        mouseCursor.classList.add("acc-grow");
    });
    
});




// tl.fromTo(hero,1.2 , {opacity:"0" , height : "0%"}, {opacity: "1",height: "100%", ease: Power2.easeInOut})
// .fromTo(hero, 1.2, {opacity:"0" ,width: '100%'}, {opacity: "1",width: '90%',  ease: Power2.easeInOut}, "-=.8")
// .fromTo(logo, 1.5, {opacity : "0" , y:"-25px"},{opacity : "1",y:"0px", ease: Power2.easeOut}, "-=1")
// .fromTo(subLogo, 1.5, {opacity : "0"},{opacity : "1"}, "-=1")
// .fromTo(navLinksAnimation, 1.8, {opacity: "0" , x: "30px"}, {opacity: "1", x: "-90px", ease: Power2.easeOut}, "-=2.3")
// ;

