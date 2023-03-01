// CAROSELLO IMMAGINI

//  Creo l'array con la lista immagini da inserire nel carosello

// Array immagini
const listaImmagini = [
    "img/01.webp",
    "img/02.webp",
    "img/03.webp",
    "img/04.webp",
    "img/05.webp"
];

// Variabili dal DOM
const imagesListDom = document.querySelector(".images-list");
const upDom = document.getElementById("up");
const downDom = document.getElementById("down");
const sidebarImgDom = document.querySelector(".images-sidebar-container");



// Ciclo per aggiunger immagini dell'array all'HTML

for (let i = 0; i < listaImmagini.length; i++) {
    const newImgContainer = `
        
        <div class="img-container">
            <img class="image" src="${listaImmagini[i]}">
        </div>

    `;
    
    imagesListDom.innerHTML += newImgContainer; 
}

// Seleziono elementi array con classe 'img-container' e 'img-sidebar-container'
const imgContainerDom = document.getElementsByClassName("img-container");
const imgSidebarOverlayDom = document.getElementsByClassName("overlay");
const sidebarContainerDom = document.getElementsByClassName('img-sidebar-container');


// Rendo visibile la prima immagine della lista
let immagineCorrente = 0;
imgContainerDom[immagineCorrente].classList.add('show');
imgSidebarOverlayDom[immagineCorrente].classList.add('hide');
sidebarContainerDom[immagineCorrente].classList.add('border');
/* upDom.classList.add('hide'); */


// Creo programma per cambiare immagine al clic sui pulsanti up e down

// Pulsante Down

downDom.addEventListener('click',

    function() {
        if (immagineCorrente < imgContainerDom.length - 1) {
            
            imgContainerDom[immagineCorrente].classList.remove('show');
            imgSidebarOverlayDom[immagineCorrente].classList.remove('hide');
            sidebarContainerDom[immagineCorrente].classList.remove('border');

            immagineCorrente++;

            imgContainerDom[immagineCorrente].classList.add('show');
            imgSidebarOverlayDom[immagineCorrente].classList.add('hide');
            sidebarContainerDom[immagineCorrente].classList.add('border');

            /* upDom.classList.remove('hide'); */
            
            if (immagineCorrente == imgContainerDom.length - 1) {
                
                /* downDom.classList.add('hide'); */              
            }    
            
        } else if (immagineCorrente == imgContainerDom.length - 1) {

            imgContainerDom[immagineCorrente].classList.remove('show');
            imgSidebarOverlayDom[immagineCorrente].classList.remove('hide');
            sidebarContainerDom[immagineCorrente].classList.remove('border');

            immagineCorrente = 0;

            imgContainerDom[immagineCorrente].classList.add('show');
            imgSidebarOverlayDom[immagineCorrente].classList.add('hide');
            sidebarContainerDom[immagineCorrente].classList.add('border');
            
        }
    }
);


// Pulsante Up
upDom.addEventListener('click',

    function() {
        if (immagineCorrente > 0) {
            
            imgContainerDom[immagineCorrente].classList.remove('show');
            imgSidebarOverlayDom[immagineCorrente].classList.remove('hide');
            sidebarContainerDom[immagineCorrente].classList.remove('border');

            immagineCorrente--;

            imgContainerDom[immagineCorrente].classList.add('show');
            imgSidebarOverlayDom[immagineCorrente].classList.add('hide');
            sidebarContainerDom[immagineCorrente].classList.add('border');

            downDom.classList.remove('hide');
            
            if (immagineCorrente == 0) {
                
                /* upDom.classList.add('hide'); */             
                
            }    
            
            
        } else if (immagineCorrente == 0) {

            imgContainerDom[immagineCorrente].classList.remove('show');
            imgSidebarOverlayDom[immagineCorrente].classList.remove('hide');
            sidebarContainerDom[immagineCorrente].classList.remove('border');


            immagineCorrente = imgContainerDom.length -1;


            imgContainerDom[immagineCorrente].classList.add('show');
            imgSidebarOverlayDom[immagineCorrente].classList.add('hide');
            sidebarContainerDom[immagineCorrente].classList.add('border');
        }
    }
);



