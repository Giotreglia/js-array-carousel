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



// Ciclo per aggiunger immagini dell'array all'HTML

for (let i = 0; i < listaImmagini.length; i++) {
    const newImgContainer = `
        
        <div class="img-container">
            <img class="image" src="${listaImmagini[i]}">
        </div>

    `;

    imagesListDom.innerHTML += newImgContainer; 
}

// Seleziono elementi array con classe 'img-container'
const imgContainerDom = document.getElementsByClassName("img-container");

// Rendo visibile la prima immagine della lista
let immagineCorrente = 0;
imgContainerDom[immagineCorrente].classList.add('show');



