import Card from './MetCard';

export default function MetCards(objectIDs) {
  console.log(objectIDs);
  
    return `
    <div class='cards__container'>
      for (objectID in objectIDs) {}
      ${objectID
        .map((objectID) => {
          console.log(objectID);
          return `
          ${Card(objectID)}
            `;
        })
        .join('')}
        </div>
      `;
  }