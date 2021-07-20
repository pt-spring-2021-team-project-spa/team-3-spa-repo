import NasaItem from './NasaItem';

export default function NasaItems(nasaItems) {
  
    return `
    <div class='nasa_cards__container'>
      ${nasaItems.collection.items
        .map((nasaItem) => {
          return `
          ${NasaItem(nasaItem)}
            `;
        })
        .join('')}
        </div>
      `;
  }