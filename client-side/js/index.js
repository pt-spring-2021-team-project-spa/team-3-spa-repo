import Header from './components/Header.js';
import apiActions from './api-actions/api-actions.js';
import CardsPage from './pages/CardsPage.js';
// import CardPage from './pages/CardPage.js';

buildPage();

function buildPage() {
    header();
    renderNasaCardList();
    // renderNasaCardInfo();
}

function header() {
    const headerElement = document.querySelector('.header');
    headerElement.innerHTML = Header();
  }

function renderNasaCardList() {
    const nasaCardsButton = document.querySelector('.nav__list_cards');
    nasaCardsButton.addEventListener('click', () => {
      const app = document.querySelector('#app');
      apiActions.getRequest(
        // 'https://images-api.nasa.gov/search?q=location',
        'https://images-api.nasa.gov/search?keywords=mars',
        (cards) => {
          app.innerHTML = CardsPage(cards);
        }
      );
    });
  }

function renderNasaCardInfo() {
    const app = document.querySelector('$app');
    app.addEventListener('click', (event) => {
        if (event.target.classList.contains('card__title')) {
            const cardUrl =
                event.target.parentElement.querySelector('#cardId').value;
            apiActions.getRequest(cardUrl, (card) => {
                app.innerHTML = CardPage(card);
            });
        }
    });
}