import Cards from '../components/Cards.js';

export default function CardsPage(cards) {
    return `
    <h1>Cards Page</h1>
    ${Cards(cards)}
    `;
}