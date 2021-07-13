import Card from '../components/Card.js';

export default function(card) {
    return `
        <h1>Card Page</h1>
        ${Card(card)}
    `;
}
