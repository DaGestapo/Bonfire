
const list = document.querySelector('.partnership__list');
const iconsNames = ['Beeline-logo-2.png',
'beststocks-3.jpg',
'bio-rad-logo-3.jpg',
'Frame-2-2.png',
'Frame-3-1.jpg',
'Frame-3-2.png',
'kfc-2.png',
'kotik_team-2.png',
'laroche-posay-2.png',
'lev_haoloam-3-1.jpg',
'logo-ru-3.jpg',
'mic250-2-1.png',
'nuffic-neso-logo-2.png',
'papa_jones-1.png',
'scale_1-3.jpg',
'schneider250-2.png',
'simple250-2.png',
'ucs250-2.png'];


const partnershipObj = {
    createElem(src) {
        let div = document.createElement('div');
        let img = document.createElement('img');

        img.src = `./img/icons/${src}`;
        img.alt = `Image did't load`;

        div.className = `partnership__list--item`;
        div.append(img);

        return div;
    }
}

for(let name of iconsNames) {
    list.append( partnershipObj.createElem(name) );
}


