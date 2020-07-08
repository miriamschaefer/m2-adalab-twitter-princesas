'use strict';

/* Do your magic! 🦄🦄🦄*/

const ENDPOINT =
  'https://raw.githubusercontent.com/Adalab/ejercicios-en-clase-j/master/modulo-2-practica-fin-de-semana-02-fetch/data/users.json';

const pageStructure = document.querySelector('.js-user-list');
let counter = document.querySelector('.counter-title');

let users = [];
let favorites = [];

function publishTwits() {
  fetch(ENDPOINT)
    .then((princessResponse) => princessResponse.json())

    .then((princesses) => {
      renderPrincesses(princesses);
      addListeners();
    });
}

function renderPrincesses(arr) {
  for (const elem of arr) {
    pageStructure.innerHTML += `<li class="princess-container">
    <div class="left-container">
      <div class="princess-pic"><img src="${elem.picture}" /></div>
      <h2 class="princess-name">${elem.name}</h2>
    </div>
    <div class="tweet-container">
      <p class="princess-tweet">${elem.comment}</p>
      <div class="right-container">
        <i class="fa fa-star" aria-hidden="true"></i>
      </div>
    </div>
  </li>
`;
  }
}

function addListeners() {
  const elemsList = document.querySelectorAll('.right-container');

  for (const elem of elemsList) {
    if (elem !== undefined) {
      elem.addEventListener('click', addToFavs);
    }
  }
}

function addToFavs(event) {
  const clickOnStar = event.currentTarget;
  clickOnStar.classList.toggle('change-background');

  if (clickOnStar.classList.contains('change-background')) {
    favorites.push(clickOnStar);
  } else {
    let index = favorites.indexOf(clickOnStar);
    if (index >= 0) {
      favorites.splice(index, 1);
    }
  }
  console.log(favorites.length);
  counter.innerHTML = `${favorites.length} favs`;
}

publishTwits();
