import {menu} from "./popUpMenu.js";


let header = document.querySelector('.header__main');


(() => {
    header.addEventListener('click', menu);

})();