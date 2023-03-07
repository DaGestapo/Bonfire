import {menu} from "./popUpMenu.js";


let header = document.querySelector('.header');


(() => {
    header.addEventListener('click', menu);

})();