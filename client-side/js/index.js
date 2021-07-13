import Header from './components/Header.js';
import apiActions from './api-actions/api-actions.js';
import ImagesPage from './pages/ImagesPage.js';
import CardsPage from './pages/CardsPage.js';
import CardPage from './pages/CardPage.js';

buildPage();

function buildPage() {
    header();
    renderNasaCardInfoList();
    renderNasaCardInfo();
    renderNasaImages();
}

function header() {
    const headerElement = document.querySelector('.header');
    headerElement.innerHTML = Header();
  }

function renderNasaCardInfoList() {
    const cardsButton = document.querySelector('.nav__list_cards');
    cardsButton.addEventListener('click', () => {
        const app = document.querySelector('#app');
        apiActions.getRequest('', (cards) => {
            app.innerHTML = CardsPage(cards);
        });
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

function renderNasaImages() {
    const nasaImagesButton = document.querySelector('.nav__list_images');
    nasaImagesButton.addEventListener('click', () => {
      const app = document.querySelector('#app');
      apiActions.getRequest(
        'https://images-api.nasa.gov/search?q=location',
        (images) => {
          app.innerHTML = ImagesPage(images);
        }
      );
    });
  }