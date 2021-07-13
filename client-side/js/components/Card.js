export default function Card(card) {
    return `
    <div class='card__container'>
        <input type='hidden' id='cardId' value=${card.url} />
        <h2 class='card__title'>${card.title}</h2>
        <img src=${cardImage} alt='' />
        <p>Description: ${card.description}</p>
    </div>
    `;
}