import Card from './Card';

export default function Cards(cards) {
    // console.log(cards);
    const items = cards.collection.items;
    // console.log(items);
  
    return `
      ${cards.collection.items
        .map((card) => {
        //   console.log(item.data);
        //   const cardTitle = item.data[0].title;
        //   const cardImage = item.links[0].href;
        //   const cardShortDescription = item.data[0].description_508;
        //   const cardLongDescription = item.data[0].description;
        //   <h2>${cardTitle}</h2>
        //     <img src=${cardImage} alt='' />
        //     <p>${cardLongDescription}</p>
          return `
            ${Card(card)}
            `;
        })
        .join('')}
      `;
  }