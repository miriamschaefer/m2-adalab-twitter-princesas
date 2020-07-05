'use strict';

/* Do your magic! 🦄🦄🦄*/

const ENDPOINT =
  'https://raw.githubusercontent.com/Adalab/ejercicios-en-clase-j/master/modulo-2-practica-fin-de-semana-02-fetch/data/users.json';

const pageStructure = document.querySelector('.js-user-list');

let users = [];
let favorites = [];

function publishTwits() {
  fetch(ENDPOINT)
    .then((princessResponse) => princessResponse.json())

    .then((princesses) => {
      let princessTwit = '';

      for (let i = 0; i < princesses.length; i++) {
        const name = princesses[i].name;
        const tweet = princesses[i].comment;
        const pic = princesses[i].picture;

        princessTwit += `<li class="princess-container"><div class="left-container"><div class="princess-pic"><img src="${pic}"></div><h2 class="princess-name">${name}</h2></div><p class="princess-tweet">${tweet}</p>
        </li>`;
      }

      pageStructure.innerHTML = princessTwit;
    });
}

publishTwits();

// ahora quiero que cuando haga click sobre un tweet, el fondo se me ponga en azul y añada a la princesa a una lista de favoritos.

//prueba con bucles for of, preguntar a maría si habría alguna manera de hacerlo con esto.

// let princessesNames = '';
// let princessesComments = '';
// let princessesPics = '';

// for (const princess of princesses) {
//   let princessName = `${princess.name}`;
//   princessesNames += princessName;
// }
// for (const comment of princesses) {
//   let princessComment = `${comment.comment}`;
//   princessesComments += princessComment;
// }

// for (const image of princesses) {
//   let princessPic = `<img src="${image.picture}">`;
//   princessesPics += princessPic;
// }
