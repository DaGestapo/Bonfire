
let check = true;

export function menu(e) {
    let target = e.target;

    if(target.closest('BUTTON').className != 'header__main--btn') return;
    
    let navBar = document.querySelector('.navbar');
    if(check) {
        setTimeout( () => {  navBar.style.display = "flex"; });
        animateElement(navBar, 6);

        check = false;
    } else {
       setTimeout( () => {  navBar.style.display = "none"; }, 200);
       animateElement(navBar, 0);

        check = true;
    }
}

function animateElement(elem, position) {
    elem.animate( [
        { transform: `translateY(${position}rem)` },
       ], {
           duration: 200,
           fill: "forwards"
       });
}