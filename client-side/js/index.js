import Header from './components/Header.js';
import apiActions from './api-actions/api-actions.js';
import CardsPage from './pages/CardsPage.js';
import CardPage from './pages/CardPage.js';

buildPage();

function buildPage() {
    header();
    renderNasaCardList();
    renderNasaCard();
}

function header() {
    const headerElement = document.querySelector('.header');
    headerElement.innerHTML = Header();
  }

let nasaCardsJson;

function renderNasaCardList() {
    const nasaCardsButton = document.querySelector('.nav__list_cards');
    nasaCardsButton.addEventListener('click', () => {
      const app = document.querySelector('#app');
      apiActions.getRequest(
        'https://images-api.nasa.gov/search?keywords=mars',
        (cards) => {
          nasaCardsJson = cards;
          app.innerHTML = CardsPage(cards);
        }
      );
    });

  }

function renderNasaCard() {
  const app = document.querySelector('#app');
  app.addEventListener('click', (event) => {
    if (event.target.classList.contains('card__title')) {
      const nasaId =
        event.target.parentElement.querySelector('input').value;
      // const cardUrl =
      //   'https://images-api.nasa.gov/search?nasa_id=' + nasaId;
      // apiActions.getRequest(cardUrl, (card) => {
      //   console.log(card);
      //   app.innerHTML = CardPage(card);
      // });
      console.log(nasaCardsJson);
      nasaCardsJson.collection.items.forEach((card) => {
        if (nasaId === card.data[0].nasa_id) {
          console.log(card);
          app.innerHTML = CardPage(card);
        }
      });
    }
  });
    // const nasaCardButton = document.querySelector('.nav__list_card');
    // nasaCardButton.addEventListener('click', (event) => {
    //   const app = document.querySelector('#app');
    //   apiActions.getRequest(
    //     'https://images-api.nasa.gov/search?keywords=mars',
    //     (cards) => {
    //       app.innerHTML = CardPage(cards);
    //     }
    //   );
    // });
}