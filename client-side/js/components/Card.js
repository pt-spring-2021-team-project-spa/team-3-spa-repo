// export default function Card(cards) {
//     return `
//     <div class='card__container'>
//         <input type='hidden' id='cardId' value=${card.data[0].nasa_id} />
//         <h2 class='card__title'>${card.data[0].title}</h2>
//         <h3>${card.data[0].nasa_id}</h3>
//         <div class='card__img'><img src=${card.links[0].href} alt='' /></div>
//         <p class='card__desc'>Description: ${card.data[0].description}</p>
//     </div>
//     `;
// }

export default function Card(cards) {
  let next = 0;
      ${cards.collection.items
        .map((card) => {
          const cardTitle = card.data[0].title;
          const cardImage = card.links[0].href;
          const cardShortDescription = card.data[0].description_508;
          const cardLongDescription = card.data[0].description;
          return `
          <div class='card__container'>
            <input type='hidden' id='cardId' value=${card.data[0].nasa_id} />
            <h2 class='card__title'>${cardTitle}</h2>
            <div class='card__img'><img src=${cardImage} alt='' /></div>
            <p class='card__desc'>${cardLongDescription}</p>
            </div>
            `;
        })
        .join('')}
  }