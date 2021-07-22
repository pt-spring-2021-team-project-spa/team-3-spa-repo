import NasaItem from './NasaItem';

export default function NasaItems(nasaItems) {
  
    return `
    <div class='cards__container'>
      ${nasaItems.collection.items
        .map((nasaItem) => {
          if ((nasaItem.data[0].description.length >= 100) && (nasaItem.data[0].description.length <= 500)) {
            return `
            ${NasaItem(nasaItem)}
              `;
          }
        })
        .join('')}
        </div>
      `;
      
  }