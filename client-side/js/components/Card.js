export default function Card(card) {
    return `
    <div class='card__container'>
        <input type='hidden' id='cardId' value=${card.nasa_id} />
        <h2 class='card__title'>${card.data[0].title}</h2>
        <img src=${card.links[0].href} alt='' />
        <p>Description: ${card.data[0].description}</p>
    </div>
    `;
}