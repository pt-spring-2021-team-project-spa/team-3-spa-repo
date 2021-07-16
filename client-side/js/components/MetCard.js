export default function Card(objectID) {
    return `
    <div class='card__container'>
        apiActions.getRequest(
            'https://collectionapi.metmuseum.org/public/collection/v1/objects/' + ${objectID},
            (card) => {
                <input type='hidden' id='cardId' value=${card.objectID} />
                <h2 class='card__title'>${card.title}</h2>
                <h3>${card.objectID}</h3>
                <div class='card__img'><img src=${card.primaryImageSmall} alt='' /></div>
                <p class='card__desc'>Artist: ${card.artistDisplayName}</p>
            }
        );

    </div>
    `;
}