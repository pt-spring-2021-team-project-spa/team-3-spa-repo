<<<<<<< HEAD
console.log('Client Side is wired up!');
import Header from "./components/Header.js";
// import Footer from "/components/Footer.js";
import HomePage from "./pages/HomePage.js";

const container = document.querySelector(".container");
=======
import Header from './components/Header.js';
import apiActions from './api-actions/api-actions.js';
import CardsPage from './pages/CardsPage.js';
import CardPage from './pages/CardPage.js';
>>>>>>> dev

buildPage();

function buildPage() {
<<<<<<< HEAD
  header();
  footer();
  navigateToHomePage();
}

function header() {
  const headerElement = document.querySelector(".header");
  headerElement.innerHTML = Header();
}

function footer() {
  const footerElement = document.querySelector(".footer");
  footerElement.innerHTML = Footer();
}

function navigateToHomePage() {
  const homeButton = document.querySelector();
  homeButton.addEventListener("click", () => {
    const app = document.querySelector("#app");
    app.innerHTML = HomePage();
  });
}
=======
    header();
    renderNasaCardList();
    renderNasaCard();
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
        'https://images-api.nasa.gov/search?keywords=mars',
        (cards) => {
          app.innerHTML = CardsPage(cards);
        }
      );
    });

  }

function renderNasaCard() {
  const app = document.querySelector('#app');
  app.addEventListener('click', (event) => {
    if (event.target.classList.contains('card__title')) {
      const cardUrl =
        event.target.parentElement.querySelector('#cardId').value;
      apiActions.getRequest(cardUrl, (person) => {
        app.innerHTML = CardPage(card);
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
>>>>>>> dev
