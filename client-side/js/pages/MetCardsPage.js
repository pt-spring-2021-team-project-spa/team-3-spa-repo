import Cards from '../components/MetCards.js';

export default function CardsPage(objectIDs) {
    return `
    <h1>Cards Page</h1>
    ${Cards(objectIDs)}
    `;
}