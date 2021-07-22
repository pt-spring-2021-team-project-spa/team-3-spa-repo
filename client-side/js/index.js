import Header from './components/Header.js';
import apiActions from './api-actions/api-actions.js'
import NasaItemsPage from './pages/NasaItemsPage.js';
import NasaItemPage from './pages/NasaItemPage.js';
import MetObjectsPage from './pages/MetObjectsPage.js';
import MetObjectPage from './pages/MetObjectPage.js';
import MetObject from './components/MetObject.js';
// import Footer from "/components/Footer.js";
import HomePage from "./pages/HomePage.js";
import RandomCard from './components/RandomCard';

const app = document.querySelector('#app');
const container = document.querySelector(".container");
let nasaItemsJson;
let metData = [];

function randomCard() {
  app.innerHTML = RandomCard(1)
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

function renderNasaItemList() {
  const nasaItemsButton = document.querySelector('.nav__list_nasa_cards');
  nasaItemsButton.addEventListener('click', () => {
    const app = document.querySelector('#app');
    apiActions.getRequest(
      'https://images-api.nasa.gov/search?keywords=mars',
      (nasaItems) => {
        nasaItemsJson = nasaItems;
        app.innerHTML = NasaItemsPage(nasaItems);
      }
    );
  });
}

function renderNasaItem() {
  const app = document.querySelector('#app');
  app.addEventListener('click', (event) => {
    if (event.target.classList.contains('card__title')) {
      // console.log("NASA ID: " + event.target.parentNode.querySelector('#cardId').value)
      const nasaId =
        event.target.parentNode.querySelector('.id').value;
        nasaItemsJson.collection.items.forEach((nasaItem, index) => {
          let itemIndex = index;
          if (nasaId === nasaItem.data[0].nasa_id) {
            app.innerHTML = NasaItemPage(nasaItem, itemIndex);
          }
        })
      //   const Url =

      // apiActions.getRequest(nasaItemUrl, (nasaItem) => {
      //   app.innerHTML = NasaItemPage(nasaItem);
      // });
    }
  });
}

function renderMetObjectList() {
    const metObjectsButton = document.querySelector('.nav__list_met_cards');
    metObjectsButton.addEventListener('click', () => {
      metData = [];
      const app = document.querySelector('#app');
      app.innerHTML = MetObjectsPage();
      const metObjectsDiv = document.querySelector('.cards__container');
      apiActions.getRequest(
        'https://collectionapi.metmuseum.org/public/collection/v1/search?artistOrCulture=true&q=french',
        (metObjectIds) => {
          console.log(metObjectIds);
          for (let i=0; i<10; i++) {
            apiActions.getRequest(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${metObjectIds.objectIDs[Math.floor(Math.random() * metObjectIds.objectIDs.length)]}`, (metObject) => {
              console.log(MetObject);
              metData.push(metObject);
              metObjectsDiv.innerHTML += MetObject(metObject);
            });
          }
        }
      );
    });
  }

// function renderMetCard() {
//   console.log("getting to renderMetCard function");
//   const app = document.querySelector('#app');
//   app.addEventListener('click', (event) => {
//     if (event.target.classList.contains('card__title')) {
//       console.log("NASA ID: " + event.target.parentNode.querySelector('#cardId').value)
//       const cardUrl =
//         event.target.parentNode.querySelector('#cardId').value;
//         console.log("Card url = " + cardUrl);
//       //   const cardUrl =

//       // apiActions.getRequest(cardUrl, (person) => {
//       //   app.innerHTML = CardPage(card);
//       // });
//     }
//   });
//     // const nasaCardButton = document.querySelector('.nav__list_card');
//     // nasaCardButton.addEventListener('click', (event) => {
//     //   const app = document.querySelector('#app');
//     //   apiActions.getRequest(
//     //     'https://images-api.nasa.gov/search?keywords=mars',
//     //     (cards) => {
//     //       app.innerHTML = CardPage(cards);
//     //     }
//     //   );
//     // });
// }

function buildPage() {
  header();
  // footer();
  // navigateToHomePage();
  renderNasaItemList();
  renderNasaItem();
  renderMetObjectList();
  // renderMetObject();
  randomCard(); // will be taken out of buildpage after homepage is built
}

buildPage()

const card = document.querySelector(".card__inner");
card.addEventListener("click", function (e) {
  card.classList.toggle('is-flipped');
});
