// export default function Card(card) {
//     return `
//     <div class='card__container'>
//         <input type='hidden' id='cardId' value=${card.data[1].nasa_id} />
//         <h3 class='card__title'>${card.data[0].title}</h2>
//         <h4>${card.data[0].nasa_id}</h3>
//         <div class='card__img'><img src=${card.links[1].href} alt='' /></div>
//         <p class='card__desc'>Description: ${card.data[1].description}</p>
//     </div>
//     `;
// }

export default function PlanetCard(name, image, cardData) {
    console.log('planetcard name :' + cardData.englishName);
    return `
    <div class="card">
      <div class="card__inner">
        <div class="card__face card__face--front">
        </div>

        <div class="card__photo">
          <img src="${image}" class="card-img" />
        </div>

        <div class="card__face card__face--back">
          <div class="card__content">
            <div class="card__header">
              <h3>DID YOU KNOW?</h2>
            </div>
            <div class="card__body">
              <h4>Planet:</h3>
              <p>${cardData.name}</p>
              </p>
              <h4>Moons:</h3>
              <p>${cardData.moons.length || 0}</p>
              </p>
              <p>
              <h4>Gravity (m/s²):</h3>
              <p>${cardData.gravity}</p>
              </p>
              <h4>Average Temperature:</h3>
              <p>${cardData.avgTemp}</p>
              <h4>Discovered By:</h3>
              <p>${cardData.discoveredBy}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    `
}