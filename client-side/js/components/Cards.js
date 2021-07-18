import Card from './Card';

export default function Cards(cards) {
  
    return `
    <div class='cards__container'>
      ${cards.collection.items
        .map((card) => {
          return `
          ${Card(card)}
            `;
        })
        .join('')}
        </div>
      `;
  }