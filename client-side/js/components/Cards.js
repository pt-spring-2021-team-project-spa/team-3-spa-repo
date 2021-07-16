// import Card from './Card';

export default function Cards(cards) {
    // console.log(cards);
    // const items = cards.collection.items;
    // console.log(items);
  
    return `
    <div class='cards__container'>
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
        </div>
      `;
  }