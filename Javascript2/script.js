// Yazmin Alfaro 10/01/25 
// Learned from https://javascript30.com/Sticky Nav
// Added a Fixed Navigation Bar that appears when you scroll down

const nav = document.querySelector('#main');
const topOfNav = nav.offsetTop;

function fixNav() {
    if(window.scrollY >= topOfNav) {
        document.body.style.paddingTop = nav.offsetHeight + 'px';
        document.body.classList.add('fixed-nav');
    } else {
        document.body.style.paddingTop = 0;
        document.body.classList.remove('fixed-nav');
    }
}


window.addEventListener('scroll', fixNav);

