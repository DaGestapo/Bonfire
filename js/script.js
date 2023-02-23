(() => {
    let header = document.querySelector('.header__main');
    let check = true;

    header.addEventListener('click', (e) => {
        let target = e.target;
        let animationTime = 200;

        if(target.closest('BUTTON').className != 'header__main--btn') return;
        
        let navBar = document.querySelector('.navbar');
        if(check) {
            setTimeout( () => {  navBar.style.display = "flex"; });
            navBar.animate( [
             { transform: "translateY(6rem)" },
            ], {
                duration: animationTime,
                fill: "forwards"
            });

            check = false;
        } else {
           setTimeout( () => {  navBar.style.display = "none"; }, animationTime);
            navBar.animate( [
                { transform: "translateY(0rem)" },
               ], {
                   duration: animationTime,
                   fill: "forwards"
               });

            check = true;
        }
        

    });
})();