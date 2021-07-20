import Header from './components/Header.js';
import apiActions from './api-actions/api-actions.js';
import NasaItemsPage from './pages/NasaItemsPage.js';
import NasaItemPage from './pages/NasaItemPage.js';

buildPage();

function buildPage() {
    header();
    renderNasaItemList();
    renderNasaItem();
    // renderMetItemList();
    // renderMetItem();
}

function header() {
    const headerElement = document.querySelector('.header');
    headerElement.innerHTML = Header();
}

let nasaItemsJson;

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
    if (event.target.classList.contains('nasa_card__title')) {
      // console.log("NASA ID: " + event.target.parentNode.querySelector('#cardId').value)
      const nasaId =
        event.target.parentNode.querySelector('.nasaCardId').value;
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

// function renderMetCardList() {
//     const nasaCardsButton = document.querySelector('.nav__list_cards');
//     nasaCardsButton.addEventListener('click', () => {
//       const app = document.querySelector('#app');
//       apiActions.getRequest(
//         'https://collectionapi.metmuseum.org/public/collection/v1/objects',
//         // 'https://collectionapi.metmuseum.org/public/collection/v1/search?hasImages=true',
//         (objectIDs) => {
//           app.innerHTML = CardsPage(objectIDs);
//         }
//       );
//     });
//   }

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