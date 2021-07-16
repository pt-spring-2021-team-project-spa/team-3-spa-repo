import Card from '../components/MetCard.js';

export default function(card) {
    return `
        <h1>Card Page</h1>
        ${Card(card)}
    `;
}
