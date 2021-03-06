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

export default function ArtCard(name, image, cardData) {
    console.log('artcard name :' + name);
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
              <h4>Artist:</h3>
              <p>${cardData.artistDisplayName}</p>
              </p>
              <h4>Artist Nationality:</h3>
              <p>${cardData.artistNationality}</p>
              <p>
              <h4>Title of Artwork:</h3>
               <p>${cardData.title}</p>
              <p>
              <h4>Date of Production:</h3>
              <p>${cardData.objectDate}</p>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    `
}